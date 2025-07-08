import React from 'react';
import { Google, Facebook } from '@mui/icons-material';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
  const onSignInGoogle = () => {
    console.log('onSignInGoogle');
  };

  const onSignInFacebook = () => {
    console.log('onSignInFacebook');
  };

  return (
    <div style={{ marginTop: '16px', width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <CustomButton 
        text="Sign in with Google" 
        onClick={onSignInGoogle}
        type="SECONDARY"
        fullWidth={true}
        startIcon={<Google sx={{ color: '#DD4D44' }} />}
        sx={{
          backgroundColor: '#FAE9EA',
          color: '#DD4D44',
          '&:hover': {
            backgroundColor: '#FAE9EA',
          }
        }}
      />

      <CustomButton 
        text="Sign in with Facebook" 
        onClick={onSignInFacebook}
        type="SECONDARY"
        fullWidth={true}
        startIcon={<Facebook sx={{ color: '#4765A9' }} />}
        sx={{
          backgroundColor: '#E7EAF4',
          color: '#4765A9',
          '&:hover': {
            backgroundColor: '#E7EAF4',
          }
        }}
      />
    </div>
  );
};

export default SocialSignInButtons;
