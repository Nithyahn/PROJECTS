
import React, { useState } from 'react';
import { Box, Select, MenuItem, TextField, Button, Typography } from '@mui/material';

const CarForm = ({ onEmissionsChange }) => {
  const [car1, setCar1] = useState({ type: 'Medium car', fuel: 'Petrol', distance: '' });
  const [car2, setCar2] = useState({ type: 'Medium car', fuel: 'Diesel', distance: '' });
  const [motorcycle, setMotorcycle] = useState({ type: 'Average motorcycle', distance: '' });
  const [emissions, setEmissions] = useState({ car1: 0, car2: 0, motorcycle: 0, total: 0 });

  const handleCar1Change = (e) => setCar1({ ...car1, [e.target.name]: e.target.value });
  const handleCar2Change = (e) => setCar2({ ...car2, [e.target.name]: e.target.value });
  const handleMotorcycleChange = (e) => setMotorcycle({ ...motorcycle, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const emissionsData = calculateEmissions(car1, car2, motorcycle);
    setEmissions(emissionsData);
    onEmissionsChange(emissionsData.total); // Pass total emissions to parent component
  };

  const handleReset = () => {
    setCar1({ type: 'Medium car', fuel: 'Petrol', distance: '' });
    setCar2({ type: 'Medium car', fuel: 'Diesel', distance: '' });
    setMotorcycle({ type: 'Average motorcycle', distance: '' });
    setEmissions({ car1: 0, car2: 0, motorcycle: 0, total: 0 });
  };

  const calculateEmissions = (car1, car2, motorcycle) => {
    const emissions = {};

    // Car 1 emissions
    let car1Emissions = 0;
    if (car1.fuel === 'Petrol') {
      car1Emissions = car1.distance * 0.23; // kg CO2 per mile for petrol cars
    } else if (car1.fuel === 'Diesel') {
      car1Emissions = car1.distance * 0.27; // kg CO2 per mile for diesel cars
    }
    emissions.car1 = car1Emissions;

    // Car 2 emissions
    let car2Emissions = 0;
    if (car2.fuel === 'Petrol') {
      car2Emissions = car2.distance * 0.23; // kg CO2 per mile for petrol cars
    } else if (car2.fuel === 'Diesel') {
      car2Emissions = car2.distance * 0.27; // kg CO2 per mile for diesel cars
    }
    emissions.car2 = car2Emissions;

    // Motorcycle emissions
    let motorcycleEmissions = 0;
    if (motorcycle.type === 'Average motorcycle') {
      motorcycleEmissions = motorcycle.distance * 0.15; // kg CO2 per mile for average motorcycles
    } else if (motorcycle.type === 'Large motorcycle') {
      motorcycleEmissions = motorcycle.distance * 0.20; // kg CO2 per mile for large motorcycles
    } else if (motorcycle.type === 'Small motorcycle') {
      motorcycleEmissions = motorcycle.distance * 0.10; // kg CO2 per mile for small motorcycles
    }
    emissions.motorcycle = motorcycleEmissions;

    // Total emissions
    emissions.total = car1Emissions + car2Emissions + motorcycleEmissions;

    return emissions;
  };

  return (
    <Box sx={{ width: "1500px", marginRight: -84, marginLeft: -44, paddingLeft: 4, paddingRight: 10, backgroundColor: '#F5F5F5', borderRadius: 2, paddingBottom: 3, paddingTop: 3 }}>
      <Typography variant="h4" component="h2" sx={{ marginBottom: 2, fontWeight :"bold" }}>
        Private Transport
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Box sx={{ width: 'calc(33.33% - 16px)', marginRight: 2 }}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            Car 1
          </Typography>
          <Select name="type" value={car1.type} onChange={handleCar1Change} sx={{ width: '100%', marginBottom: 2 }}>
            <MenuItem value="Medium car">Medium car</MenuItem>
            <MenuItem value="Large car">Large car</MenuItem>
            <MenuItem value="Small car">Small car</MenuItem>
          </Select>
          <Select name="fuel" value={car1.fuel} onChange={handleCar1Change} sx={{ width: '100%', marginBottom: 2 }}>
            <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Electric">Electric</MenuItem>
          </Select>
          <TextField
            label="Distance (miles)"
            name="distance"
            value={car1.distance}
            onChange={handleCar1Change}
            sx={{ width: '100%' }}
          />
        </Box>

        <Box sx={{ width: 'calc(33.33 % - 16px)', marginRight: 2 }}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            Car 2
          </Typography>
          <Select name="type" value={car2.type} onChange={handleCar2Change} sx={{ width: '100%', marginBottom: 2 }}>
            <MenuItem value="Medium car">Medium car</MenuItem>
            <MenuItem value="Large car">Large car</MenuItem>
            <MenuItem value="Small car">Small car</MenuItem>
          </Select>
          <Select name="fuel" value={car2.fuel} onChange={handleCar2Change} sx={{ width: '100%', marginBottom: 2 }}>
            <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Electric">Electric</MenuItem>
          </Select>
          <TextField
            label="Distance (miles)"
            name="distance"
            value={car2.distance}
            onChange={handleCar2Change}
            sx={{ width: '100%' }}
          />
        </Box>

        <Box sx={{ width: 'calc(33.33% - 16px)' }}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            Motorcycle
          </Typography>
          <Select name="type" value={motorcycle.type} onChange={handleMotorcycleChange} sx={{ width: '100%', marginBottom: 2 }}>
            <MenuItem value="Average motorcycle">Average motorcycle</MenuItem>
            <MenuItem value="Large motorcycle">Large motorcycle</MenuItem>
            <MenuItem value="Small motorcycle">Small motorcycle</MenuItem>
          </Select>
          <TextField
            label="Distance (miles)"
            name="distance"
            value={motorcycle.distance}
            onChange={handleMotorcycleChange}
            sx={{ width: '100%' }}
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '30%', marginRight: 1 }}>
          Calculate
        </Button>
        <Button type="reset" variant="outlined" color="secondary" onClick={handleReset} sx={{ width: '100%', backgroundColor: 'purple', color: 'white', marginRight: 0 ,height:"48px",marginTop: 4}}>
          Reset
        </Button>
      </Box>

      <Box sx={{ padding: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
          Emissions Results
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: 1 }}>
          Car 1: {emissions.car1.toFixed(2)} kg CO2
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: 1 }}>
          Car 2: {emissions.car2.toFixed(2)} kg CO2
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: 1 }}>
          Motorcycle: {emissions.motorcycle.toFixed(2)} kg CO2
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: 'green', fontWeight: 'bold' }}>
          Total Carbon Footprint: {emissions.total.toFixed(2)} kg CO2
        </Typography>
      </Box>
    </Box>
  );
};

export default CarForm;
/*

import React, { useState } from 'react';
import { Box, Select, MenuItem, TextField, Button, Typography } from '@mui/material';

const CarForm = ({ onEmissionsChange, selectedMonth, selectedYear, disabled }) => {
  const [car1, setCar1] = useState({ type: 'Medium car', fuel: 'Petrol', distance: '' });
  const [car2, setCar2] = useState({ type: 'Medium car', fuel: 'Diesel', distance: '' });
  const [motorcycle, setMotorcycle] = useState({ type: 'Average motorcycle', distance: '' });
  const [emissions, setEmissions] = useState({ car1: 0, car2: 0, motorcycle: 0, total: 0 });

  const handleCar1Change = (e) => setCar1({ ...car1, [e.target.name]: e.target.value });
  const handleCar2Change = (e) => setCar2({ ...car2, [e.target.name]: e.target.value });
  const handleMotorcycleChange = (e) => setMotorcycle({ ...motorcycle, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) return;
    const emissionsData = calculateEmissions(car1, car2, motorcycle);
    setEmissions(emissionsData);
    onEmissionsChange(emissionsData.total);
  };

  const handleReset = () => {
    setCar1({ type: 'Medium car', fuel: 'Petrol', distance: '' });
    setCar2({ type: 'Medium car', fuel: 'Diesel', distance: '' });
    setMotorcycle({ type: 'Average motorcycle', distance: '' });
    setEmissions({ car1: 0, car2: 0, motorcycle: 0, total: 0 });
    onEmissionsChange(0);
  };

  const calculateEmissions = (car1, car2, motorcycle) => {
    const emissions = {};

    // Car 1 emissions
    let car1Emissions = 0;
    if (car1.fuel === 'Petrol') {
      car1Emissions = parseFloat(car1.distance) * 0.23; // kg CO2 per mile for petrol cars
    } else if (car1.fuel === 'Diesel') {
      car1Emissions = parseFloat(car1.distance) * 0.27; // kg CO2 per mile for diesel cars
    }
    emissions.car1 = car1Emissions || 0;

    // Car 2 emissions
    let car2Emissions = 0;
    if (car2.fuel === 'Petrol') {
      car2Emissions = parseFloat(car2.distance) * 0.23; // kg CO2 per mile for petrol cars
    } else if (car2.fuel === 'Diesel') {
      car2Emissions = parseFloat(car2.distance) * 0.27; // kg CO2 per mile for diesel cars
    }
    emissions.car2 = car2Emissions || 0;

    // Motorcycle emissions
    let motorcycleEmissions = 0;
    if (motorcycle.type === 'Average motorcycle') {
      motorcycleEmissions = parseFloat(motorcycle.distance) * 0.15;
    } else if (motorcycle.type === 'Large motorcycle') {
      motorcycleEmissions = parseFloat(motorcycle.distance) * 0.20;
    } else if (motorcycle.type === 'Small motorcycle') {
      motorcycleEmissions = parseFloat(motorcycle.distance) * 0.10;
    }
    emissions.motorcycle = motorcycleEmissions || 0;

    // Total emissions
    emissions.total = emissions.car1 + emissions.car2 + emissions.motorcycle;

    return emissions;
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 4, backgroundColor: '#f7f7f7', borderRadius: 2 }}>
      <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
        Private Transport
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 2, color: 'primary.main' }}>
        Period: {selectedMonth} {selectedYear}
      </Typography>

      {disabled && (
        <Typography variant="subtitle1" sx={{ color: 'error.main', marginBottom: 2 }}>
          Please select a month and year before proceeding
        </Typography>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Box sx={{ width: 'calc(33.33% - 16px)', marginRight: 2 }}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            Car 1
          </Typography>
          <Select 
            name="type" 
            value={car1.type} 
            onChange={handleCar1Change} 
            sx={{ width: '100%', marginBottom: 2 }}
            disabled={disabled}
          >
            <MenuItem value="Medium car">Medium car</MenuItem>
            <MenuItem value="Large car">Large car</MenuItem>
            <MenuItem value="Small car">Small car</MenuItem>
          </Select>
          <Select 
            name="fuel" 
            value={car1.fuel} 
            onChange={handleCar1Change} 
            sx={{ width: '100%', marginBottom: 2 }}
            disabled={disabled}
          >
            <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Electric">Electric</MenuItem>
          </Select>
          <TextField
            label="Distance (miles)"
            name="distance"
            value={car1.distance}
            onChange={handleCar1Change}
            sx={{ width: '100%' }}
            disabled={disabled}
          />
        </Box>

        <Box sx={{ width: 'calc(33.33% - 16px)', marginRight: 2 }}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            Car 2
          </Typography>
          <Select 
            name="type" 
            value={car2.type} 
            onChange={handleCar2Change} 
            sx={{ width: '100%', marginBottom: 2 }}
            disabled={disabled}
          >
            <MenuItem value="Medium car">Medium car</MenuItem>
            <MenuItem value="Large car">Large car</MenuItem>
            <MenuItem value="Small car">Small car</MenuItem>
          </Select>
          <Select 
            name="fuel" 
            value={car2.fuel} 
            onChange={handleCar2Change} 
            sx={{ width: '100%', marginBottom: 2 }}
            disabled={disabled}
          >
            <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Electric">Electric</MenuItem>
          </Select>
          <TextField
            label="Distance (miles)"
            name="distance"
            value={car2.distance}
            onChange={handleCar2Change}
            sx={{ width: '100%' }}
            disabled={disabled}
          />
        </Box>

        <Box sx={{ width: 'calc(33.33% - 16px)' }}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            Motorcycle
          </Typography>
          <Select 
            name="type" 
            value={motorcycle.type} 
            onChange={handleMotorcycleChange} 
            sx={{ width: '100%', marginBottom: 2 }}
            disabled={disabled}
          >
            <MenuItem value="Average motorcycle">Average motorcycle</MenuItem>
            <MenuItem value="Large motorcycle">Large motorcycle</MenuItem>
            <MenuItem value="Small motorcycle">Small motorcycle</MenuItem>
          </Select>
          <TextField
            label="Distance (miles)"
            name="distance"
            value={motorcycle.distance}
            onChange={handleMotorcycleChange} sx={{ width: '100%' }}
            disabled={disabled}
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit} 
          sx={{ width: '40%', marginRight: 1 }}
          disabled={disabled}
        >
          Calculate
        </Button>
        <Button 
          type="reset" 
          variant="outlined" 
          color="secondary" 
          onClick={handleReset} 
          sx={{ width: '40%', borderColor: 'purple', color: 'purple', marginRight: 0 }}
        >
          Reset
        </Button>
      </Box>

      <Box sx={{ padding: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
          Emissions Results for {selectedMonth} {selectedYear}
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: 1 }}>
          Car 1: {emissions.car1.toFixed(2)} kg CO2
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: 1 }}>
          Car 2: {emissions.car2.toFixed(2)} kg CO2
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: 1 }}>
          Motorcycle: {emissions.motorcycle.toFixed(2)} kg CO2
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: 'green', fontWeight: 'bold' }}>
          Total Carbon Footprint: {emissions.total.toFixed(2)} kg CO2
        </Typography>
      </Box>
    </Box>
  );
};

export default CarForm;*/