import React, { useState } from 'react';
import { Box, TextField, Select, MenuItem, Button, Typography } from '@mui/material';
import RenewablesInput from './RenewablesInput.js';

const HomeForm = ({ onEmissionsChange }) => {
  const [inputs, setInputs] = useState({
    electricity: '',
    lpg: '',
    lpgUnit: 'kg',
    biomass: '',
    renewablesElectricity: 0,
    renewablesLPG: 0,
    renewablesBiomass: 0,
  });

  const [totalFootprint, setTotalFootprint] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleLPGUnitChange = (e) => {
    setInputs({ ...inputs, lpgUnit: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalFootprint = calculateFootprint(inputs);
    setTotalFootprint(totalFootprint);
    onEmissionsChange(totalFootprint);
  };

  const handleReset = () => {
    setInputs({
      electricity: '',
      lpg: '',
      lpgUnit: 'kg',
      biomass: '',
      renewablesElectricity: 0,
      renewablesLPG: 0,
      renewablesBiomass: 0,
    });
    setTotalFootprint(null);
  };

  const calculateFootprint = (inputs) => {
    const electricityFootprint = inputs.electricity * 0.25 * (1 - inputs.renewablesElectricity / 100);
    const lpgFootprint = getLPGFootprint(inputs.lpg, inputs.lpgUnit) * (1 - inputs.renewablesLPG / 100);
    const biomassFootprint = inputs.biomass * 0.35 * (1 - inputs.renewablesBiomass / 100);
    return electricityFootprint + lpgFootprint + biomassFootprint;
  };

  const getLPGFootprint = (lpg, unit) => {
    switch (unit) {
      case 'kg':
        return lpg * 0.18;
      case 'kWh':
        return lpg * 0.22;
      case 'lts':
        return lpg * 0.20;
      default:
        return 0;
    }
  };

  return (
    <Box sx={{ width: "1500px", marginRight: -84, marginLeft: -44, paddingLeft: 4, paddingRight: 10, backgroundColor: '#F5F5F5', borderRadius: 2, paddingBottom: 3, paddingTop: 3 }}>
      <Typography variant="h4" component="h2" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Home
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Box sx={{ flex: 1, marginLeft: 1 }}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            Electricity
          </Typography>
          <TextField
            label="Electricity (kWh)"
            name="electricity"
            value={inputs.electricity}
            onChange={handleChange}
            sx={{ width: '100%' }}
            InputProps={{ inputMode: 'numeric' }} // Ensures single-line and numeric keyboard on mobile
          />
          <RenewablesInput
            name="renewablesElectricity"
            value={inputs.renewablesElectricity}
            onChange={handleChange}
            sx={{ width: '100%' }}
          />
        </Box>

        <Box sx={{ flex: 1, marginLeft: 1 }}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            LPG
          </Typography>
          <TextField
            label="LPG"
            name="lpg"
            value={inputs.lpg}
            onChange={handleChange}
            sx={{ width: '100%' }}
            InputProps={{ inputMode: 'numeric' }} // Ensures single-line and numeric keyboard on mobile
          />
          <Select
            label="LPG Unit"
            name="lpgUnit"
            value={inputs.lpgUnit}
            onChange={handleLPGUnitChange}
            sx={{ width: '100%' }}
          >
            <MenuItem value="kg">kg</MenuItem>
            <MenuItem value="kWh">kWh</MenuItem>
            <MenuItem value="lts">lts</MenuItem>
          </Select>
          <RenewablesInput
            name="renewablesLPG"
            value={inputs.renewablesLPG}
            onChange={handleChange}
            sx={{ width: '100%' }}
          />
        </Box>

        <Box sx={{ flex: 1, marginLeft: 1 }}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            Biomass
          </Typography>
          <TextField
            label="Biomass (kg)"
            name="biomass"
            value={inputs.biomass}
            onChange={handleChange}
            sx={{ width: '100%' }}
            InputProps={{ inputMode: 'numeric' }} // Ensures single-line and numeric keyboard on mobile
          />
          <RenewablesInput
            name="renewablesBiomass"
            value={inputs.renewablesBiomass}
            onChange={handleChange}
            sx={{ width: '100%' }}
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <Button type="submit" variant="contained" color="primary" sx={{ flex: 1, marginRight: 2 }} onClick={handleSubmit}>
          Calculate
        </Button>
        <Button variant="contained" color="secondary" sx={{ flex: 1, height: "48px", marginTop: 4 }} onClick={handleReset}>
          Reset
        </Button>
      </Box>

      {totalFootprint !== null && (
        <Typography variant="h5" component="h2" sx={{ marginTop: 2, color: 'green' }}>
          Total Carbon Footprint: {totalFootprint.toFixed(2)} kgCO2
        </Typography>
      )}
    </Box>
  );
};

export default HomeForm;
