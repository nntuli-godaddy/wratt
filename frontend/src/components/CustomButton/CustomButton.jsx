import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme, type, sx }) => ({
  padding: '12px 32px',
  borderRadius: 12,
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '1rem',
  lineHeight: 1.5,
  transition: 'all 0.2s ease',
  
  '&:hover': {
    boxShadow: type === 'TERTIARY' ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-1px)',
  },

  ...(type === 'PRIMARY' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),

  ...(type === 'SECONDARY' && {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  }),

  ...(type === 'TERTIARY' && {
    backgroundColor: 'transparent',
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.grey[300]}`,
    '&:hover': {
      backgroundColor: theme.palette.grey[50],
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  }),

  ...(type === 'DANGER' && {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  }),
  ...sx
}));

const CustomButton = ({ text, onClick, type = "PRIMARY", fullWidth = false, sx }) => {
  return (
    <StyledButton 
      variant="contained" 
      onClick={onClick} 
      fullWidth={fullWidth}
      type={type}
      disableElevation
      sx={sx}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;
