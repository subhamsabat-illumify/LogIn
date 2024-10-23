/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logindata from '../api/login.json'

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  useEffect(() => {
    // Check if email is already in localStorage
    // const loggedInUser = localStorage.getItem('loggedInEmail');
     const loggedInUser = sessionStorage.getItem('loggedInEmail');
    if (loggedInUser) {
      navigate('/home');  // Automatically redirect if email is found
    }
  }, [navigate]);


  const handleLogin = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    if (!validateEmail(email)) {
      setEmailError(true);
      setEmailHelperText('Invalid email format');
      return;
    }

    // Clear error and proceed with login
    setEmailError(false);
    setEmailHelperText('');
    console.log("Email: ", email);
    console.log("Password: ", password);

    // console.log(logindata);

    const user = logindata.find((user) => user.username === email && user.password === password);
    if (user) {
        // Successful login
        console.log("Logged in successfully");
        //  localStorage.setItem('loggedInEmail', email);
        sessionStorage.setItem('loggedInEmail', email);
        onLogin();
        navigate('/home');
        setLoginError('');
        // alert(`Welcome ${user.username}!`);
      } else {
        // Failed login
        setLoginError('Invalid email or password');
      }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError(false);
      setEmailHelperText('');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="65vh"
    >
      <Box
        width={300}
        p={3}
        border="1px solid lightgray"
        borderRadius={3}
        boxShadow={3}
        textAlign="center"
      >
        <Typography variant="h5" marginBottom={2}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailHelperText}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="password"
            value={password}
            autoComplete='false'
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginError && (
            <Typography color="error" marginTop={2}>
              {loginError}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"  // Type is 'submit' to trigger form submission
            sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
