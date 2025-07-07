import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    // Add your password reset logic here
    navigate('/reset-password');
  };

  const handleBackToSignIn = () => {
    navigate('/signin');
  };

  return (
    <StyledContainer>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Forgot Password
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Enter your email address and we'll send you a link to reset your password
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleResetPassword}
          sx={{ mt: 3, mb: 2 }}
        >
          Reset Password
        </Button>

        <Button
          fullWidth
          variant="text"
          onClick={handleBackToSignIn}
        >
          Back to Sign In
        </Button>
      </Paper>
    </StyledContainer>
  );
};

export default ForgotPasswordPage;
