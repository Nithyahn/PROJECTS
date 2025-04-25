const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 9002;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = new mongoose.model("user", userSchema);

mongoose.connect('mongodb://127.0.0.1:27017/weatherapp')
  .then(() => {
    console.log('Database connected');
    
    // Routes
    app.post('/login', async (req, res) => {
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        if (password === existingUser.password) {
          return res.send({ message: "Login Successful", user: existingUser });
        } else {
          return res.send({ message: "Incorrect Password" });
        }
      } else {
        return res.send({ message: "Email not registered" });
      }
    });

    app.post('/signup', async (req, res) => {
      try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          return res.send({ message: "Email already registered" });
        }
        const newUser = new User({
          name,
          email,
          password
        });
        await newUser.save();

        res.send({ message: "Successfully Registered" });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });