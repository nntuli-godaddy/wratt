import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import axios from 'axios'


const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  flex: 1,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 500,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const SignUpPage = () => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('')
  const [token, setToken] = useState('')

  const navigate = useNavigate();

  const handleSignUp = async (e) => {

    e.preventDefault()
    
    if (!firstName || !lastName || !email || !password) {
      setError('All fields must be filled in')
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords must match")
      return
    }

    setError('')

    try {

      const response = await axios.post('http://localhost:5000/api/auth/register', {
        firstName,
        lastName,
        email,
        password
      })

      setToken(response.data.token)
      setError('Registration Sucessful')

      localStorage.setItem('token', response.data.token)

      navigate('/signin');


    }
    catch (error) {
      console.log(error.message)
      setError('Failed to register account')
    }


    
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <form onSubmit={handleSignUp}>
      <StyledContainer>
        <StyledPaper>
          <Typography variant="h3" component="h1" gutterBottom>
            Create Account
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Enter your details to create an account
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
            <CustomInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              sx={{ flex: 1 }}
            />
            <CustomInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              sx={{ flex: 1 }}
            />
          </Box>

          <CustomInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            type="email"
          />

          <CustomInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />

          <CustomInput
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type="password"
          />

          <CustomButton 
            text="Create Account" 
            onClick={handleSignUp}
            fullWidth={true}
            type='submit'
          />



          <Typography variant="body1" align="center">
            Already have an account?{' '}
            <Link to="/signin" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
              Sign In
            </Link>
          </Typography>
        </StyledPaper>
      </StyledContainer>
    </form>
  );
};

export default SignUpPage;
