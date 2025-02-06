const express = require('express');
const mysql = require('mysql');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'asset_management'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
});

// API endpoint to handle form submission
app.post('/submit-transaction', (req, res) => {
    const { portfolio_id, asset_id, transaction_type, units } = req.body;

    if (!portfolio_id || !asset_id || !transaction_type || !units) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Get price per unit from the asset table
    db.query('SELECT price FROM assets WHERE asset_id = ?', [asset_id], (err, results) => {
        if (err) return res.status(500).json({ success: false, message: 'Database error' });

        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'Asset not found.' });
        }

        const pricePerUnit = results[0].price;
        const totalValue = pricePerUnit * units;
        const transactionDate = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format

        // Insert transaction into the database
        const transactionQuery = `
            INSERT INTO transactions (portfolio_id, asset_id, transaction_type, units, price_per_unit, total_value, transaction_date)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(transactionQuery, [portfolio_id, asset_id, transaction_type, units, pricePerUnit, totalValue, transactionDate], (err, result) => {
            if (err) return res.status(500).json({ success: false, message: 'Failed to insert transaction.' });

            // Trigger in the database will handle portfolio updates
            res.json({
                success: true,
                transactionDate,
                pricePerUnit: pricePerUnit.toFixed(2),
                totalValue: totalValue.toFixed(2),
                message: `Transaction successful! You ${transaction_type} ${units} units of asset ID ${asset_id} in portfolio ID ${portfolio_id}.`
            });
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
