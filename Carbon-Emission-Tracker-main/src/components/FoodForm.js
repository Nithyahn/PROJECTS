import React, { useState } from 'react';
import { Box, Select, MenuItem, Button, InputLabel, FormControl, Typography, Grid, Card, CardContent } from '@mui/material';

const FoodForm = ({ onEmissionsChange }) => {
  const [foodData, setFoodData] = useState({
    highMeatEater: 0,
    mediumMeatEater: 0,
    lowMeatEater: 0,
    fishEater: 0,
    vegetarian: 0,
    vegan: 0,
    numberOfPeople: 1,
  });

  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [showCarbonFootprint, setShowCarbonFootprint] = useState(false);

  const handleChange = (e) => {
    setFoodData({
      ...foodData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateFootprint = () => {
    const dietFactors = {
      highMeatEater: 3.3,
      mediumMeatEater: 2.5,
      lowMeatEater: 1.8,
      fishEater: 2.0,
      vegetarian: 1.5,
      vegan: 1.0,
    };

    const totalFootprint = (
      (foodData.highMeatEater * dietFactors.highMeatEater +
      foodData.mediumMeatEater * dietFactors.mediumMeatEater +
      foodData.lowMeatEater * dietFactors.lowMeatEater +
      foodData.fishEater * dietFactors.fishEater +
      foodData.vegetarian * dietFactors.vegetarian +
      foodData.vegan * dietFactors.vegan) *
      foodData.numberOfPeople
    );

    return totalFootprint;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const footprint = calculateFootprint();
    setCarbonFootprint(footprint);
    setShowCarbonFootprint(true);
    onEmissionsChange(footprint); // Pass emissions to parent component

  };

  const handleReset = () => {
    setFoodData({
      highMeatEater: 0,
      mediumMeatEater: 0,
      lowMeatEater: 0,
      fishEater: 0,
      vegetarian: 0,
      vegan: 0,
      numberOfPeople: 1,
    });
    setCarbonFootprint(0);
    setShowCarbonFootprint(false);
  };

  return (
    <Box sx={{ padding: 3, display: 'flex', justifyContent: 'center' ,width: "1200px", marginRight: -84, marginLeft: -44, paddingLeft: 24, paddingRight: 10,backgroundColor: '#F5F5F5', borderRadius: 2, paddingBottom: 3, paddingTop: 3  }}>
      <Card sx={{ padding: 2, maxWidth: 800, margin: 'auto', border: '1px solid #ccc' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" sx={{fontWeight :"bold"}}>
            Food
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={19}>
                <Typography variant="h6" gutterBottom align="center">
                  How many days a week, on average, are you or your household...
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" align="center">High Meat Eater</Typography>
                <FormControl fullWidth margin="normal">
                  <Select name="highMeatEater" value={foodData.highMeatEater} onChange={handleChange}>
                    {[...Array(8).keys()].map((val) => (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" align="center">Medium Meat Eater</Typography>
                <FormControl fullWidth margin="normal">
                  <Select name="mediumMeatEater" value={foodData.mediumMeatEater} onChange={handleChange}>
                    {[...Array(8).keys()].map((val) => (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" align="center">Low Meat Eater</Typography>
                <FormControl fullWidth margin="normal">
                  <Select name="lowMeatEater" value={foodData.lowMeatEater} onChange={handleChange}>
                    {[...Array(8).keys()].map((val) => (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={ 4}>
                <Typography variant="subtitle1" align="center">Fish Eater</Typography>
                <FormControl fullWidth margin="normal">
                  <Select name="fishEater" value={foodData.fishEater} onChange={handleChange}>
                    {[...Array(8).keys()].map((val) => (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" align="center">Vegetarian</Typography>
                <FormControl fullWidth margin="normal">
                  <Select name="vegetarian" value={foodData.vegetarian} onChange={handleChange}>
                    {[...Array(8).keys()].map((val) => (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" align="center">Vegan</Typography>
                <FormControl fullWidth margin="normal">
                  <Select name="vegan" value={foodData.vegan} onChange={handleChange}>
                    {[...Array(8).keys()].map((val) => (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle1">Number of people</Typography>
                <FormControl fullWidth margin="normal">
                  <Select name="numberOfPeople" value={foodData.numberOfPeople} onChange={handleChange}>
                    {[...Array(10).keys()].map((val) => (
                      <MenuItem key={val} value={val + 1}>
                        {val + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                <Button type="submit" variant="contained" color="primary" sx={{ marginRight: 2, width: '10%',height:"46px" }}>
                  Calculate Carbon Footprint
                </Button>
                <Button variant="contained" color="secondary" onClick={handleReset} sx={{ width:"60%", height: "48px",marginTop:4 }}>
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
          {showCarbonFootprint && (
            <Typography variant="h5" gutterBottom align="center" sx={{ color: 'green', marginTop: 4 }}>
              Total Carbon Footprint: {carbonFootprint.toFixed(2)} kg CO2e
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default FoodForm;
/*


// FoodForm.js
import React, { useState } from 'react';
import { Box, Select, MenuItem, Button, InputLabel, FormControl, Typography, Grid, Card, CardContent } from '@mui/material';

const FoodForm = ({ onEmissionsChange, selectedMonth, selectedYear, disabled }) => {
  const [foodData, setFoodData] = useState({
    highMeatEater: 0,
    mediumMeatEater: 0,
    lowMeatEater: 0,
    fishEater: 0,
    vegetarian: 0,
    vegan: 0,
    numberOfPeople: 1,
  });

  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [showCarbonFootprint, setShowCarbonFootprint] = useState(false);

  const handleChange = (e) => { setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) return;
    const calculatedFootprint = calculateFootprint(foodData);
    setCarbonFootprint(calculatedFootprint);
    setShowCarbonFootprint(true);
    onEmissionsChange(calculatedFootprint);
  };

  const handleReset = () => {
    setFoodData({
      highMeatEater: 0,
      mediumMeatEater: 0,
      lowMeatEater: 0,
      fishEater: 0,
      vegetarian: 0,
      vegan: 0,
      numberOfPeople: 1,
    });
    setCarbonFootprint(0);
    setShowCarbonFootprint(false);
    onEmissionsChange(0);
  };

  const calculateFootprint = (foodData) => {
    const highMeatEaterFootprint = foodData.highMeatEater * 0.5;
    const mediumMeatEaterFootprint = foodData.mediumMeatEater * 0.3;
    const lowMeatEaterFootprint = foodData.lowMeatEater * 0.2;
    const fishEaterFootprint = foodData.fishEater * 0.4;
    const vegetarianFootprint = foodData.vegetarian * 0.1;
    const veganFootprint = foodData.vegan * 0.05;
    return (highMeatEaterFootprint + mediumMeatEaterFootprint + lowMeatEaterFootprint + fishEaterFootprint + vegetarianFootprint + veganFootprint) * foodData.numberOfPeople;
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 4, backgroundColor: '#f7f7f7', borderRadius: 2 }}>
      <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
        Food
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 2, color: 'primary.main' }}>
        Period: {selectedMonth} {selectedYear}
      </Typography>

      {disabled && (
        <Typography variant="subtitle1" sx={{ color: 'error.main', marginBottom: 2 }}>
          Please select a month and year before proceeding
        </Typography>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
                High Meat Eater
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="high-meat-eater-label">Number of people</InputLabel>
                <Select
                  labelId="high-meat-eater-label"
                  id="high-meat-eater"
                  name="highMeatEater"
                  value={foodData.highMeatEater}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  disabled={disabled}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
                Medium Meat Eater
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="medium-meat-eater-label">Number of people</InputLabel>
                <Select
                  labelId="medium-meat-eater-label"
                  id="medium-meat-eater"
                  name="mediumMeatEater"
                  value={foodData.mediumMeatEater}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  disabled={disabled}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3 }>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
                Low Meat Eater
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="low-meat-eater-label">Number of people</InputLabel>
                <Select
                  labelId="low-meat-eater-label"
                  id="low-meat-eater"
                  name="lowMeatEater"
                  value={foodData.lowMeatEater}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  disabled={disabled}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
                Fish Eater
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="fish-eater-label">Number of people</InputLabel>
                <Select
                  labelId="fish-eater-label"
                  id="fish-eater"
                  name="fishEater"
                  value={foodData.fishEater}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  disabled={disabled}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
                Vegetarian
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="vegetarian-label">Number of people</InputLabel>
                <Select
                  labelId="vegetarian-label"
                  id="vegetarian"
                  name="vegetarian"
                  value={foodData.vegetarian}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  disabled={disabled}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
                Vegan
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="vegan-label">Number of people</InputLabel>
                <Select
                  labelId="vegan-label"
                  id="vegan"
                  name="vegan"
                  value={foodData.vegan}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  disabled={disabled}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
                Number of people
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="number-of-people-label">Number of people</InputLabel>
                <Select
                  labelId="number-of-people-label"
 id="number-of-people"
                  name="numberOfPeople"
                  value={foodData.numberOfPeople}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  disabled={disabled}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          sx={{ width: 'calc(50% - 16px)', marginRight: 2 }} 
          onClick={handleSubmit}
          disabled={disabled}
        >
          Calculate
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ width: 'calc(50% - 16px)' }} 
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>

      {showCarbonFootprint && (
        <Typography variant="h5" component="h2" sx={{ marginTop: 2, color: 'green' }}>
          Total Carbon Footprint for {selectedMonth} {selectedYear}: {carbonFootprint.toFixed(2)} kgCO2
        </Typography>
      )}
    </Box>
  );
};

export default FoodForm;*/