import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';

const Signup = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = e => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })  
  }

  const register = () => {
    const {name, email, password} = user
    if (name && email && password) {
      axios.post("http://localhost:9002/signup", user)
      .then(res => alert(res.data.message))
    }
    else {
      alert("Invalid input")
    }
  }

  return (
    <>
    <div>
      <form>
        <Box
          bgcolor={'#FFFFFF'}
          display='flex'
          flexDirection={'column'}
          maxWidth={300}
          alignItems={'center'}
          justifyContent={'center'}
          margin={'auto'}
          marginTop={10}
          padding={5}
          borderRadius={10}
          sx={{ ':hover': { boxShadow: '3px 3px 3px grey' }}}
          css={{ '@media (max-width: 600px)': { width: '90%', padding: 5 }}}
        >
          <Typography variant='h3' textAlign={'center'} padding={3} fontFamily={'fantasy'}>
            <AccountCircleIcon fontSize='large' />
            Sign Up
          </Typography>
          <br />
          <TextField name='name' value={user.name} type={'text'} placeholder='Name' onChange={handleChange} fullWidth />
          <br />
          <TextField name='email' value={user.email} type={'email'} placeholder='Email' onChange={handleChange}  fullWidth />
          <br />
          <TextField name='password' value={user.password} type={'password'} placeholder='Enter Password' onChange={handleChange}  fullWidth />
          <br />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            onClick={register}
            sx={{ color: 'white', bgcolor: 'teal', marginTop: 2, borderRadius: 1, ':hover': { bgcolor: 'darkgreen' }}}>
            Create Account
          </Button>
          <br />
          Login to your account
          <p>
            <Link to = '../Login'>
            <Button sx={{ width: 15, color: 'darkblue' }}>
              Login&nbsp;&nbsp;
              <LoginIcon />
            </Button>
            </Link>
          </p>
        </Box>
      </form>
    </div>
    </>
  );
};

export default Signup;