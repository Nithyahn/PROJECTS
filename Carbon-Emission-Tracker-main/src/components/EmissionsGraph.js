import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const EmissionsGraph = () => {
  const [emissionsData, setEmissionsData] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage

  useEffect(() => {
    axios.get(`/api/emissions/${userId}`)
      .then(response => {
        setEmissionsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching emissions data:', error);
      });
  }, [userId]);

  const calculateTrend = () => {
    if (emissionsData.length < 2) {
      return;
    }

    const sortedData = emissionsData.sort((a, b) => a.month - b.month);
    const firstMonthEmissions = sortedData[0].total_emissions;
    const lastMonthEmissions = sortedData[sortedData.length - 1].total_emissions;
    const difference = lastMonthEmissions - firstMonthEmissions;

    if (difference > 0) {
      setFeedbackMessage('Your emissions have increased, try some energy-saving tips!');
    } else if (difference < 0) {
      setFeedbackMessage('Your emissions are decreasing! Keep up the good work!');
    } else {
      setFeedbackMessage('Your emissions have stayed the same. Consider trying new strategies for reduction.');
    }
  };

  useEffect(() => {
    calculateTrend();
  }, [emissionsData]);

  return (
    <div>
      <LineChart width={800} height={400} data={emissionsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="total_emissions" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total_emissions" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>

      <div>
        <h2>{feedbackMessage}</h2>
        <p>Here are some tips to help you reduce emissions further:</p>
        <ul>
          <li>Turn off appliances when not in use.</li>
          <li>Consider using renewable energy sources like solar power.</li>
          <li>Switch to energy-efficient transportation, such as biking or using public transport.</li>
          <li>Reduce water usage to save energy in heating.</li>
        </ul>
      </div>
    </div>
  );
};

export default EmissionsGraph;
