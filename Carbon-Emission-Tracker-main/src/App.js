import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Tabs, Tab, Box, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeForm from './components/HomeForm';
import CarForm from './components/CarForm';
import FoodForm from './components/FoodForm';
import Summary from './components/Summary';
import carbon from './components/carbon.png'
import EmissionsGraph from './components/EmissionsGraph';
import MonthlyEmissionForm from './components/MonthlyEmissionForm';
import DateSelector from './components/DateSelector';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';
import './Dashboard.css';

function Login({ setIsLoggedIn, setUserId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:5000/login' : 'http://localhost:5000/register';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        if (isLogin) {
          console.log('Login response:', data);
          setIsLoggedIn(true);
          setUserId(data.user_id);
          localStorage.setItem('userId', data.user_id); // Store userId in localStorage
        }
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="App">
      <h1>{isLogin ? 'Welcome Back' : 'Register'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </>
        )}
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        <p>
          {isLogin ? (
            <span>
              Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Sign up</a>
            </span>
          ) : (
            <span>
              Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a>
            </span>
          )}
        </p>
      </form>
    </div>
  );
}

function Dashboard({ setIsLoggedIn, userId }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userId'); // Clear userId from localStorage on logout
  };

  return (
    <div className="dashboard">
      <header>
        <nav>
          <img src={carbon} />
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to Carbon Emission Tracker</h1>
          <p>Track and reduce your carbon footprint</p>
        </section>

        <section className="content">
          <h2 style={{ marginLeft: "250px" }}>Calculate Carbon Emissions</h2>
          <TabsComponent userId={userId} />
        </section>
      </main>

      <footer style={{
        backgroundColor: '#062652',
      }}>
        <p>&copy; 2023 Carbon Emission Tracker. All rights reserved.</p>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
        </ul>
      </footer>
    </div>
  );
}

const TabsComponent = ({ userId }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [homeEmissions, setHomeEmissions] = useState(0);
  const [carEmissions, setCarEmissions] = useState(0);
  const [foodEmissions, setFoodEmissions] = useState(0);
  const [monthlyEmissions, setMonthlyEmissions] = useState([]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleHomeEmissionsChange = (emissions) => {
    setHomeEmissions(emissions);
  };

  const handleCarEmissionsChange = (emissions) => {
    setCarEmissions(emissions);
  };

  const handleFoodEmissionsChange = (emissions) => {
    setFoodEmissions(emissions);
  };

  const fetchMonthlyEmissions = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/emissions/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setMonthlyEmissions(data);
      }
    } catch (error) {
      console.error('Error fetching monthly emissions:', error);
    }
  };

  useEffect(() => {
    if (selectedTab === 4) {
      fetchMonthlyEmissions();
    }
  }, [selectedTab, userId]);

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange} aria-label="icon tabs">
        <Tab icon={<HomeIcon />} aria-label="home" />
        <Tab icon={<DirectionsCarIcon />} aria-label="car" />
        <Tab icon={<RestaurantIcon />} aria-label="food" />
        <Tab icon={<BarChartIcon />} aria-label="emissions" />
        <Tab icon={<CalendarTodayIcon />} aria-label="monthly emissions" />
      </Tabs>

      <Box sx={{ p: 3 }}>
        {selectedTab === 0 && <HomeForm onEmissionsChange={handleHomeEmissionsChange} />}
        {selectedTab === 1 && <CarForm onEmissionsChange={handleCarEmissionsChange} />}
        {selectedTab === 2 && <FoodForm onEmissionsChange={handleFoodEmissionsChange} />}
        {/* {selectedTab === 3 && (
          <EmissionsGraph
            monthlyEmissions={monthlyEmissions}
            homeEmissions={homeEmissions}
            carEmissions={carEmissions}
            foodEmissions={foodEmissions}
          />
        )} */}
        {selectedTab === 4 && (
          <MonthlyEmissionForm
            userId={userId}
            homeEmissions={homeEmissions}
            carEmissions={carEmissions}
            foodEmissions={foodEmissions}
            onSubmitSuccess={fetchMonthlyEmissions}
          />
        )}
      </Box>

      <Summary
        homeEmissions={homeEmissions}
        carEmissions={carEmissions}
        foodEmissions={foodEmissions}
      />
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem('userId') || null;
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }
  }, [isLoggedIn, userId]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />
        } />
        <Route path="/dashboard" element={
          isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} userId={userId} /> : <Navigate to="/" />
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
