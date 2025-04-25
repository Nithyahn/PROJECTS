<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "Nithya@pes";
$dbname = "EcoVentureDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$portfolio_id = $_POST['portfolio_id'];
$asset_id = $_POST['asset_id'];
$transaction_type = $_POST['transaction_type'];
$transaction_date = $_POST['transaction_date'];
$units = $_POST['units'];
$price_per_unit = $_POST['price_per_unit'];
$total_value = $units * $price_per_unit;

// Insert transaction
$sql = "INSERT INTO Transaction (portfolio_id, asset_id, transaction_type, transaction_date, units, price_per_unit, total_value)
        VALUES ('$portfolio_id', '$asset_id', '$transaction_type', '$transaction_date', '$units', '$price_per_unit', '$total_value')";

if ($conn->query($sql) === TRUE) {
    echo "Transaction successfully recorded. Check backend for updates!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
