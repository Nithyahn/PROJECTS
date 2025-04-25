import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        We are a team dedicated to providing the best services for our users. Our mission is to create a platform that helps you manage your tasks efficiently.
      </Typography>

      <footer style={{
        backgroundColor: '#062652',
        color: 'white',
        padding: '1rem',
        width: '97%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0'
      }}>
        <p>&copy; 2023 Carbon Emission Tracker. All rights reserved.</p>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{ marginLeft: '1rem' }}>
            <a href="#privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
          </li>
          <li style={{ marginLeft: '1rem' }}>
            <a href="#terms" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a>
          </li>
        </ul>
      </footer>
    </Box>
  );
};

export default About;
