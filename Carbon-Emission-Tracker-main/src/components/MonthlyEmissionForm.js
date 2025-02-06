

//CRUD WORKING!!!!!!!

import React, { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  Paper,  
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const MonthlyEmissionForm = ({
  userId,
  homeEmissions = 0,
  carEmissions = 0,
  foodEmissions = 0,
  onSubmitSuccess
}) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [emissions, setEmissions] = useState([]);
  const [selectedEmission, setSelectedEmission] = useState(null);

  const totalEmissions = homeEmissions + carEmissions + foodEmissions;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from(
    { length: 5 },
    (_, i) => new Date().getFullYear() - 2 + i
  );

  useEffect(() => {
    console.log('MonthlyEmissionForm userId:', userId);
    fetchEmissions();
  }, [userId]);

  const fetchEmissions = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/emissions/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setEmissions(data);
      }
    } catch (error) {
      console.error('Error fetching emissions:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!userId) {
      setError('User ID is missing. Please log in again.');
      setIsSubmitting(false);
      return;
    }

    const emissionData = {
      user_id: userId,
      month: selectedMonth,
      year: selectedYear,
      home_emissions: homeEmissions,
      car_emissions: carEmissions,
      food_emissions: foodEmissions,
      total_emissions: totalEmissions
    };

    try {
      const url = selectedEmission
        ? `http://localhost:5000/api/emissions/${selectedEmission.id}`
        : 'http://localhost:5000/add-monthly-emission';
      const method = selectedEmission ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emissionData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(selectedEmission ? 'Emissions updated successfully!' : 'Monthly emissions added successfully!');
        setSelectedMonth('');
        setSelectedYear(new Date().getFullYear());
        setSelectedEmission(null);
        fetchEmissions();
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else {
        throw new Error(data.message || 'Failed to add/update emissions');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Error adding/updating emissions');
      alert(error.message || 'Error adding/updating emissions');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (emissionId) => {
    if (window.confirm('Are you sure you want to delete this emission record?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/emissions/${emissionId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Emissions deleted successfully!');
          fetchEmissions();
        } else {
          const data = await response.json();
          throw new Error(data.message || 'Failed to delete emissions');
        }
      } catch (error) {
        console.error('Error:', error);
        alert(error.message || 'Error deleting emissions');
      }
    }
  };

  const handleEdit = (emission) => {
    setSelectedEmission(emission);
    setSelectedMonth(emission.month);
    setSelectedYear(emission.year);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom align="center" sx = {{ fontWeight:"bold"}}>
        Monthly Emissions Summary
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Your Carbon Footprint
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Category</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Emissions (kg CO2e)</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Home</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{homeEmissions.toFixed(2)}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Car</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{carEmissions.toFixed(2)}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Food</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{foodEmissions.toFixed(2)}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography sx={{ fontWeight: 'bold' }}>Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontWeight: 'bold' }}>{totalEmissions.toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="month-label">Month</InputLabel>
              <Select
                labelId="month-label"
                id="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {months.map((month, index) => (
                  <MenuItem key={index} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="year-label">Year</InputLabel>
              <Select
                labelId="year-label"
                id="year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting || !selectedMonth || !selectedYear}
          >
            {isSubmitting ? (
              <CircularProgress size={24} />
            ) : selectedEmission ? (
              'Update Emissions'
            ) : (
              'Save Monthly Emissions'
            )}
          </Button>
        </Box>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </form>

      <List sx={{ mt: 4 }}>
        {emissions.map((emission) => (
          <ListItem key={emission.id}>
            <ListItemText
              primary={`${emission.month} ${emission.year}`}
              secondary={`Total: ${emission.total_emissions.toFixed(2)} kg CO2`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(emission)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(emission.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default MonthlyEmissionForm;




// MonthlyEmissionForm.js->working add emission functionality (global)
/*
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';


const monthNameToNumber = {
  'January': '01', 'February': '02', 'March': '03', 'April': '04',
  'May': '05', 'June': '06', 'July': '07', 'August': '08',
  'September': '09', 'October': '10', 'November': '11', 'December': '12'
};


const MonthlyEmissionForm = ({ 
  userId, 
  homeEmissions, 
  carEmissions, 
  foodEmissions, 
  selectedMonth, 
  selectedYear, 
  onSubmitSuccess 
}) => {
  const [totalEmissions, setTotalEmissions] = useState(0);

  useEffect(() => {
    setTotalEmissions(homeEmissions + carEmissions + foodEmissions);
  }, [homeEmissions, carEmissions, foodEmissions]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedMonth && selectedYear) {
      // Convert month name to number
      const monthNumber = monthNameToNumber[selectedMonth];
      if (!monthNumber) {
        alert('Invalid month selected');
        return;
      }
  
      const emissionData = {
        userId,
        date: `${selectedYear}-${monthNumber}`,
        emissions: totalEmissions,
      };
  
      try {
        const response = await fetch('http://localhost:5000/api/emissions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(emissionData),
        });
  
        if (response.ok) {
          const data = await response.json();
          alert('Emissions data submitted successfully');
          onSubmitSuccess();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to submit emissions');
        }
      } catch (error) {
        console.error('Error submitting emissions data:', error);
        alert('An error occurred while submitting emissions data: ' + error.message);
      }
    }
  };


  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Monthly Emission Summary
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {selectedMonth} {selectedYear}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Total Emissions (kg CO2)"
          type="number"
          value={totalEmissions}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
          disabled={!selectedMonth || !selectedYear}
        >
          Submit Monthly Emissions
        </Button>
      </form>
    </Box>
  );
};

export default MonthlyEmissionForm;

/*


import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  padding: theme.spacing(2),
  '& .MuiTextField-root': {
    marginBottom: theme.spacing(2),
  },
  '& .MuiButton-root': {
    marginBottom: theme.spacing(2),
  },
}));

const monthNameToNumber = {
  'January': '01', 'February': '02', 'March': '03', 'April': '04',
  'May': '05', 'June': '06', 'July': '07', 'August': '08',
  'September': '09', 'October': '10', 'November': '11', 'December': '12'
};

const MonthlyEmissionForm = ({ 
  userId, 
  homeEmissions, 
  carEmissions, 
  foodEmissions, 
  selectedMonth, 
  selectedYear, 
  onSubmitSuccess 
}) => {
  const [totalEmissions, setTotalEmissions] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [existingEmission, setExistingEmission] = useState(null);

  useEffect(() => {
    setTotalEmissions(homeEmissions + carEmissions + foodEmissions);
  }, [homeEmissions, carEmissions, foodEmissions]);

  // Check if emission exists for selected month/year
  useEffect(() => {
    const checkExistingEmission = async () => {
      if (selectedMonth && selectedYear) {
        try {
          const monthNumber = monthNameToNumber[selectedMonth];
          const response = await fetch(
            `http://localhost:5000/api/emissions/${userId}/${selectedYear}/${monthNumber}`,
            {
              credentials: 'include',
            }
          );
          if (response.ok) {
            const data = await response.json();
            setExistingEmission(data);
          } else {
            setExistingEmission(null);
          }
        } catch (error) {
          console.error('Error checking existing emission:', error);
          setExistingEmission(null);
        }
      }
    };

    checkExistingEmission();
  }, [selectedMonth, selectedYear, userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedMonth && selectedYear) {
      setIsSubmitting(true);
      const monthNumber = monthNameToNumber[selectedMonth];
      if (!monthNumber) {
        alert('Invalid month selected');
        setIsSubmitting(false);
        return;
      }

      const emissionData = {
        userId,
        date: `${selectedYear}-${monthNumber}`,
        emissions: totalEmissions,
      };

      try {
        const response = await fetch('http://localhost:5000/api/emissions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(emissionData),
        });

        if (response.ok) {
          const data = await response.json();
          alert('Emissions data submitted successfully');
          onSubmitSuccess();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to submit emissions');
        }
      } catch (error) {
        console.error('Error submitting emissions data:', error);
        alert('An error occurred while submitting emissions data: ' + error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleDelete = async () => {
    if (!selectedMonth || !selectedYear) {
      alert('Please select a month and year');
      return;
    }

    if (window.confirm('Are you sure you want to delete this emission record?')) {
      setIsDeleting(true);
      try {
        const monthNumber = monthNameToNumber[selectedMonth];
        const response = await fetch(
          `http://localhost:5000/api/emissions/${selectedYear}/${monthNumber}/${userId}`,
          {
            method: 'DELETE',
            credentials: 'include',
          }
        );

        if (response.ok) {
          alert('Emission record deleted successfully');
          setExistingEmission(null);
          onSubmitSuccess();
        } else {
          const error = await response.json();
          throw new Error(error.message || 'Failed to delete emission');
        }
      } catch (error) {
        console.error('Error deleting emission:', error);
        alert('Failed to delete emission: ' + error.message);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <StyledBox>
      <Typography variant="h5" gutterBottom>
        Monthly Emission Summary
      </Typography>
      
      <Typography variant="subtitle1" gutterBottom>
        {selectedMonth} {selectedYear}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Total Emissions (kg CO2)"
          type="number"
          value={totalEmissions}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            disabled={!selectedMonth || !selectedYear || isSubmitting}
            startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Monthly Emissions'}
          </Button>

          {existingEmission && (
            <Button 
              onClick={handleDelete}
              variant="contained" 
              color="error" 
              fullWidth
              disabled={isDeleting}
              startIcon={isDeleting ? <CircularProgress size={20} /> : null}
            >
              {isDeleting ? 'Deleting...' : 'Delete Monthly Emissions'}
            </Button>
          )}
        </Box>
      </form>

      {existingEmission && (
        <Box sx={{ mt: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Existing emission record found for this month
          </Typography>
        </Box>
      )}
    </StyledBox>
  );
};

export default MonthlyEmissionForm;*/