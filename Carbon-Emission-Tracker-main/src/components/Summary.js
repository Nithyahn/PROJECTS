

import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';

const Summary = ({ homeEmissions, carEmissions, foodEmissions }) => {
  const totalEmissions = homeEmissions + carEmissions + foodEmissions;

  const data = [
    { name: 'Home', value: homeEmissions, fill: '#ff69b4' },
    { name: 'Car', value: carEmissions, fill: '#33cc33' },
    { name: 'Food', value: foodEmissions, fill: '#6666ff' },
  ];

  const highestComponent = data.reduce((max, current) => (max.value > current.value ? max : current));
  const lowestComponent = data.reduce((min, current) => (min.value < current.value ? min : current));

  return (
    <Box sx={{ width: "1500px", marginRight: -84, marginLeft: -41, paddingLeft: 4, paddingRight: 10, backgroundColor: '#F5F5F5', borderRadius: 2, paddingBottom: 3, paddingTop: 3}}>
      <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
        YOUR CARBON FOOTPRINT
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">Emissions (kg CO2e)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <HomeIcon sx={{ marginRight: 1 }} />
                Home
              </TableCell>
              <TableCell align="right">{homeEmissions.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <DirectionsCarIcon sx={{ marginRight: 1 }} />
                Car
              </TableCell>
              <TableCell align="right">{carEmissions.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <RestaurantIcon sx={{ marginRight: 1 }} />
                Food
              </TableCell>
              <TableCell align="right">{foodEmissions.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <strong>Total</strong>
              </TableCell>
              <TableCell align="right">
                <strong>{totalEmissions.toFixed(2)}</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={2} sx={{ padding: 4 }}>
        <Grid item xs={6}>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
              Highest contributor to emissions:
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginBottom: 1 }}>
              {highestComponent.name} ({highestComponent.value.toFixed(2)} kg CO2e)
            </Typography>

            <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
              Lowest contributor to emissions:
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginBottom: 1 }}>
              {lowestComponent.name} ({lowestComponent.value.toFixed(2)} kg CO2e)
            </Typography>

            <Box sx={{ backgroundColor: '#c6efce', padding: 2, borderRadius: 2, marginTop: 2 }}>
              <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
                Tips to reduce emissions:
              </Typography>
              {highestComponent.name === 'Home' && (
                <ul>
                  <li>Turn off lights, electronics, and appliances when not in use.</li>
                  <li>Use energy-efficient light bulbs and appliances.</li>
                  <li>Adjust your thermostat to use less energy for heating and cooling.</li>
                </ul>
              )}
              {highestComponent.name === 'Car' && (
                <ul>
                  <li>Drive an electric or hybrid vehicle.</ li>
                  <li>Car pool or use public transportation.</li>
                  <li>Maintain your vehicle to improve fuel efficiency.</li>
                </ul>
              )}
              {highestComponent.name === 'Food' && (
                <ul>
                  <li>Choose a plant-based diet.</li>
                  <li>Buy locally sourced and seasonal food.</li>
                  <li>Reduce food waste by planning meals and using up leftovers.</li>
                </ul>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <Box sx={{ padding: 2 }}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill={(entry) => entry.fill}
                label={(entry) => `${entry.name}: ${entry.value.toFixed(2)} kg CO2e`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Summary;