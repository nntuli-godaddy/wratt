// import React from "react";

// function LandingPage(){
//     return (
//         <div style={{ textAlign: 'center', marginTop: '2rem' }} >
//             <h1> This is the Landing Page</h1>       
//         </div>
//     )
// }//v1.8

import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function LandingPage() {
  return (
    <Box sx={{ backgroundColor: '#F5F3F4', minHeight: '100vh', width: '100%' }}>
      {/* Navbar */}
      <Box sx={{ width: '100%', backgroundColor: '#4E408F', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        <Box display="flex" alignItems="center">
          <img src="/src/assets/logo.png" alt="Logo" style={{ height: '50px', marginRight: '1rem' }} />
          <Typography variant="h6">Bootcamp Shopping Cart</Typography>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/">HOME</Button>
          <Button color="inherit" component={Link} to="/shop">SHOP</Button>
          <Button color="inherit" component={Link} to="/cart">CART</Button>
        </Box>
      </Box>

      {/* Landing Stuff */}
      <Box sx={{ textAlign: 'center', marginTop: '4rem' }}>
        <Typography variant="h3" gutterBottom color="black">
          Welcome to Bootcamp Shopping Cart
        </Typography>
        <Box sx={{ paddingTop: '1rem' }}>
          <Button variant="contained" component={Link} to="/login" sx={{ backgroundColor: '#4E408F', '&:hover': { backgroundColor: '#3b3173' }, color: '#fff', margin: '0.5rem', padding: '0.75rem 1.5rem' }}>
            Go to Login Page
          </Button>
          <Button variant="outlined" component={Link} to="/register" sx={{ borderColor: '#4E408F', color: '#4E408F', '&:hover': { backgroundColor: '#f0f0f0', borderColor: '#3b3173', color: '#3b3173' }, margin: '0.5rem', padding: '0.75rem 1.5rem' }}>
            Go to Register Page
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;

