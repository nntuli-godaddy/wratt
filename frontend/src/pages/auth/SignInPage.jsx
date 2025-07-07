import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

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
  gap: theme.spacing(3),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const SignInPage = () => {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add your authentication logic here
    navigate('/home');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h3" component="h1" gutterBottom>
          Sign In
        </Typography>

        <CustomInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <CustomInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <CustomButton 
          text="Sign In" 
          onClick={handleSignIn}
          fullWidth={true}
        />

        <CustomButton 
          text="Forgot Password?" 
          onClick={handleForgotPassword}
          type="TERTIARY"
          fullWidth={true}
        />

        <SocialSignInButtons />

        <Typography variant="body1" align="center">
          Don't have an account?{' '}
          <Link to="/signup" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
            Sign Up
          </Link>
        </Typography>
      </StyledPaper>
    </StyledContainer>
  );
};

export default SignInPage;
