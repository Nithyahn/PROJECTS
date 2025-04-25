import {React, useState} from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setLoginUser}) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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

  const login = () => { 
    axios.post("http://localhost:9002/login", user)
    .then(res => {
      alert(res.data.message);
      setLoginUser(res.data.user);
        window.location.href = '/';
    })
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
            Login
          </Typography>
          <br />
          <TextField name='email' value={user.email} type={'email'} placeholder='Email' onChange={handleChange} fullWidth />
          <br />
          <TextField name='password' value={user.password} type={'password'} placeholder='Enter Password' onChange={handleChange} fullWidth />
          <br />
          <Button
            type='submit'
            variant='contained'
            onClick={login}
            sx={{ color: 'white', width:'300px', bgcolor: 'teal', marginTop: 2, borderRadius: 1, ':hover': { bgcolor: 'darkgreen' }}}>
            Login
          </Button>
          <Link to = '/signup'>
          <Button
            type='submit'
            variant='contained'
            sx={{ color: 'white', width:'300px', bgcolor: 'teal', marginTop: 2, borderRadius: 1, ':hover': { bgcolor: 'darkgreen' }}}>
            Register
          </Button>
          </Link>
        </Box>
      </form>
    </div>
    </>
  );
};

export default Login;