import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Paper, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

const ConfirmEmailPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleResendEmail = () => {
    setIsLoading(true);
    // Add your resend email logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleBackToSignIn = () => {
    navigate('/signin');
  };

  return (
    <StyledContainer>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Confirm Your Email
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            We've sent a confirmation email to your address. Please check your inbox and click the link to verify your email.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Didn't receive the email?
          </Typography>
          <Button
            variant="outlined"
            onClick={handleResendEmail}
            disabled={isLoading}
            sx={{ mb: 2 }}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Resend Email'}
          </Button>
        </Box>

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

export default ConfirmEmailPage;
