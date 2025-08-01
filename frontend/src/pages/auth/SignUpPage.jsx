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
  gap: theme.spacing(2),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const SignUpPage = () => {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add your signup logic here
    navigate('/confirm-email');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h3" component="h1" gutterBottom>
          Create Account
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Enter your details to create an account
        </Typography>

        <CustomInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

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
        />

        <SocialSignInButtons />

        <Typography variant="body1" align="center">
          Already have an account?{' '}
          <Link to="/signin" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
            Sign In
          </Link>
        </Typography>
      </StyledPaper>
    </StyledContainer>
  );
};

export default SignUpPage;
