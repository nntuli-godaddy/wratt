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

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    // Add your password reset logic here
    navigate('/signin');
  };

  const handleBack = () => {
    navigate('/forgot-password');
  };

  return (
    <StyledContainer>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Reset Password
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Enter your new password
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleReset}
          sx={{ mt: 3, mb: 2 }}
        >
          Reset Password
        </Button>

        <Button
          fullWidth
          variant="text"
          onClick={handleBack}
        >
          Back
        </Button>
      </Paper>
    </StyledContainer>
  );
};

export default ResetPasswordPage;
