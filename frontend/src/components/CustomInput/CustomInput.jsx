import React from 'react';
import { TextField, Box } from '@mui/material';

const CustomInput = ({ value, onChange, placeholder, type, fullWidth = true }) => {
  return (
    <Box
      sx={{
        width: fullWidth ? '100%' : '60%',
        mb: 2,
      }}
    >
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        fullWidth
        size="small"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            borderColor: '#e8e8e8',
          },
          '& .MuiOutlinedInput-root:hover': {
            borderColor: '#3B71F3',
          },
          '& .MuiOutlinedInput-root.Mui-focused': {
            borderColor: '#3B71F3',
          },
        }}
      />
    </Box>
  );
};

export default CustomInput;
