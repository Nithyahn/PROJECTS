from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import os
import urllib.parse
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()
'''
app = Flask(__name__)
CORS(app)
from flask_cors import CORS'''

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000", "supports_credentials": True}})

# Database configuration
# Encode the password to handle special characters
encoded_password = urllib.parse.quote_plus(os.getenv('MYSQL_PASSWORD'))

# Configure the database URI using the environment variables
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql://{os.getenv('MYSQL_USER')}:{encoded_password}@{os.getenv('MYSQL_HOST')}/{os.getenv('MYSQL_DB')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False



db = SQLAlchemy(app)
migrate = Migrate(app, db)  # Initialize Flask-Migrate

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256))  # Increase size to 256
    emissions = db.relationship('Emission', backref='user', lazy=True)


    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email
        }

class Emission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    month = db.Column(db.String(20), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    home_emissions = db.Column(db.Float, nullable=False)
    car_emissions = db.Column(db.Float, nullable=False)
    food_emissions = db.Column(db.Float, nullable=False)
    total_emissions = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "month": self.month,
            "year": self.year,
            "home_emissions": self.home_emissions,
            "car_emissions": self.car_emissions,
            "food_emissions": self.food_emissions,
            "total_emissions": self.total_emissions,
            "created_at": self.created_at.isoformat()
        }

class Home_Emission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    electricity = db.Column(db.Integer, nullable=False)
    lpg = db.Column(db.Integer, nullable=False)
    biomass = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "electricity": self.electricity,
            "lpg": self.lpg,
            "biomass": self.biomass,
            "created_at": self.created_at.isoformat()
        }

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if not all([name, email, password]):
            return jsonify({"message": "Missing required fields"}), 400

        if User.query.filter_by(email=email).first():
            return jsonify({"message": "Email already registered"}), 400

        new_user = User(name=name, email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()

        logger.info(f"New user registered: {email}")
        return jsonify({"message": "User registered successfully", "user_id": new_user.id}), 201

    except Exception as e:
        logger.error(f"Registration error: {str(e)}")
        db.session.rollback()
        return jsonify({"message": "Registration failed", "error": str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')

        if not all([email, password]):
            return jsonify({"message": "Missing required fields"}), 400

        user = User.query.filter_by(email=email).first()

        if user and user.check_password(password):
            logger.info(f"User logged in: {email}")
            return jsonify({
                "message": "Login successful",
                "user_id": user.id,
                "name": user.name,
                "email": user.email
            }), 200
        else:
            return jsonify({"message": "Invalid email or password"}), 401

    except Exception as e:
        logger.error(f"Login error: {str(e)}")
        return jsonify({"message": "Login failed", "error": str(e)}), 500

@app.route('/add-monthly-emission', methods=['POST'])
def add_m3onthly_emission():
    try:
        data = request.json
        logger.info(f"Received emission data: {data}")

        user_id = data.get('user_id')
        month = data.get('month')
        year = data.get('year')
        home_emissions = data.get('home_emissions')
        car_emissions = data.get('car_emissions')
        food_emissions = data.get('food_emissions')
        total_emissions = data.get('total_emissions')

        if not all([user_id, month, year, home_emissions is not None, 
                   car_emissions is not None, food_emissions is not None, 
                   total_emissions is not None]):
            return jsonify({"message": "Missing required fields"}), 400

        # Verify user exists
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404

        # Check for existing emission record
        existing_emission = Emission.query.filter_by(
            user_id=user_id,
            month=month,
            year=year
        ).first()

        if existing_emission:
            return jsonify({"message": "Emissions already recorded for this month"}), 400

        new_emission = Emission(
            user_id=user_id,
            month=month,
            year=year,
            home_emissions=home_emissions,
            car_emissions=car_emissions,
            food_emissions=food_emissions,
            total_emissions=total_emissions
        )

        db.session.add(new_emission)
        db.session.commit()

        logger.info(f"Emissions recorded for user {user_id}: {month}/{year}")
        return jsonify({
            "message": "Emissions recorded successfully",
            "emission": new_emission.to_dict()
        }), 201

    except Exception as e:
        logger.error(f"Error recording emissions: {str(e)}")
        db.session.rollback()
        return jsonify({"message": "Error recording emissions", "error": str(e)}), 500

@app.route('/api/emissions/<int:user_id>', methods=['GET'])
def get_emissions(user_id):
    try:
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404

        emissions = Emission.query.filter_by(user_id=user_id).order_by(
            Emission.year.desc(),
            Emission.month.desc()
        ).all()

        logger.info(f"Retrieved emissions for user {user_id}")
        return jsonify([emission.to_dict() for emission in emissions]), 200

    except Exception as e:
        logger.error(f"Error retrieving emissions: {str(e)}")
        return jsonify({"message": "Error retrieving emissions", "error": str(e)}), 500
    


@app.route('/api/monthly-emissions/<int:user_id>', methods=['GET'])
def get_monthly_emissions(user_id):
    try:
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404

        emissions = Emission.query.filter_by(user_id=user_id).order_by(
            Emission.year,
            Emission.month
        ).all()

        formatted_emissions = []
        for emission in emissions:
            # Create a date string in format "YYYY-MM-01" for proper date handling in frontend
            date_str = f"{emission.year}-{emission.month}-01"
            formatted_emissions.append({
                "month": date_str,
                "total_emissions": emission.total_emissions,
                "home_emissions": emission.home_emissions,
                "car_emissions": emission.car_emissions,
                "food_emissions": emission.food_emissions
            })

        logger.info(f"Retrieved monthly emissions for user {user_id}")
        return jsonify(formatted_emissions), 200

    except Exception as e:
        logger.error(f"Error retrieving monthly emissions: {str(e)}")
        return jsonify({"message": "Error retrieving monthly emissions", "error": str(e)}), 500

@app.route('/api/emissions-summary/<int:user_id>', methods=['GET'])
def get_emissions_summary(user_id):
    try:
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404

        emissions = Emission.query.filter_by(user_id=user_id).all()

        total_home_emissions = sum(e.home_emissions for e in emissions)
        total_car_emissions = sum(e.car_emissions for e in emissions)
        total_food_emissions = sum(e.food_emissions for e in emissions)
        total_emissions = sum(e.total_emissions for e in emissions)

        summary = {
            "total_emissions": total_emissions,
            "home_emissions": total_home_emissions,
            "car_emissions": total_car_emissions,
            "food_emissions": total_food_emissions,
            "number_of_months": len(emissions)
        }

        logger.info(f"Retrieved emissions summary for user {user_id}")
        return jsonify(summary), 200

    except Exception as e:
        logger.error(f"Error retrieving emissions summary: {str(e)}")
        return jsonify({"message": "Error retrieving emissions summary", "error": str(e)}), 500

@app.route('/api/latest-emission/<int:user_id>', methods=['GET'])
def get_latest_emission(user_id):
    try:
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404

        latest_emission = Emission.query.filter_by(user_id=user_id).order_by(
            Emission.year.desc(),
            Emission.month.desc()
        ).first()

        if not latest_emission:
            return jsonify({"message": "No emissions recorded yet"}), 404

        result = latest_emission.to_dict()
        logger.info(f"Retrieved latest emission for user {user_id}")
        return jsonify(result), 200

    except Exception as e:
        logger.error(f"Error retrieving latest emission: {str(e)}")
        return jsonify({"message": "Error retrieving latest emission", "error": str(e)}), 500

@app.route('/api/emissions/<int:emission_id>', methods=['PUT'])
def update_emission(emission_id):
    try:
        emission = Emission.query.get(emission_id)
        if not emission:
            return jsonify({"message": "Emission not found"}), 404

        data = request.json
        emission.home_emissions = data.get('home_emissions', emission.home_emissions)
        emission.car_emissions = data.get('car_emissions', emission.car_emissions)
        emission.food_emissions = data.get('food_emissions', emission.food_emissions)
        emission.total_emissions = data.get('total_emissions', emission.total_emissions)

        db.session.commit()
        return jsonify({"message": "Emission updated successfully", "emission": emission.to_dict()}), 200

    except Exception as e:
        logger.error(f"Error updating emission: {str(e)}")
        db.session.rollback()
        return jsonify({"message": "Error updating emission", "error": str(e)}), 500
'''
@app.route('/api/emissions', methods=['POST', 'OPTIONS'])
def add_emission():
    if request.method == "OPTIONS":
        return jsonify({}), 200
    
    try:
        data = request.json
        logger.info(f"Received emission data: {data}")

        user_id = data.get('userId')
        date = data.get('date')
        emissions = data.get('emissions')

        if not all([user_id, date, emissions is not None]):
            return jsonify({"message": "Missing required fields"}), 400

        # Parse date
        try:
            year, month = date.split('-')
            year = int(year)
            month = int(month)
            if month < 1 or month > 12:
                raise ValueError("Invalid month")
        except ValueError as e:
            logger.error(f"Date parsing error: {str(e)}, received date: {date}")
            return jsonify({"message": f"Invalid date format: {str(e)}"}), 400

        new_emission = Emission(
            user_id=user_id,
            month=str(month).zfill(2),  # Ensure month is always two digits
            year=year,
            home_emissions=0,
            car_emissions=0,
            food_emissions=0,
            total_emissions=emissions
        )

        db.session.add(new_emission)
        db.session.commit()

        logger.info(f"Successfully recorded emission for user {user_id}, date {year}-{month}")
        return jsonify({
            "message": "Emission recorded successfully",
            "emission": new_emission.to_dict()
        }), 201

    except Exception as e:
        logger.error(f"Error recording emission: {str(e)}")
        db.session.rollback()
        return jsonify({"message": "Error recording emission", "error": str(e)}), 500
'''
@app.route('/api/emissions/<int:emission_id>', methods=['DELETE'])
def delete_emission(emission_id):
    try:
        emission = Emission.query.get(emission_id)
        if not emission:
            return jsonify({"message": "Emission not found"}), 404

        db.session.delete(emission)
        db.session.commit()
        return jsonify({"message": "Emission deleted successfully"}), 200

    except Exception as e:
        logger.error(f"Error deleting emission: {str(e)}")
        db.session.rollback()
        return jsonify({"message": "Error deleting emission", "error": str(e)}), 500
    
# Error handlers
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"message": "Resource not found"}), 404

@app .errorhandler(500)
def internal_server_error(error):
    return jsonify({"message": "Internal Server Error"}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)








