

// import React from 'react';
// import { Box, Typography, Button, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// function CartPage() {
//   const product = {
//     name: "WRATT",
//     price: 27.09,
//     image: '/src/assets/logo.png',
//     quantity: 1,
//   };

//   return (
//     <Box sx={{ backgroundColor: '#F5F3F4', minHeight: '100vh' }}>
//       {/* Navbar */}
//       <Box sx={{ width: '100%', backgroundColor: '#4E408F', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
//         <Box display="flex" alignItems="center">
//           <img src="/src/assets/logo.png" alt="Logo" style={{ height: '50px', marginRight: '1rem' }} />
//           <Typography variant="h6">Bootcamp Shopping Cart</Typography>
//         </Box>
//         <Box>
//           <Button color="inherit">HOME</Button>
//           <Button color="inherit">SHOP</Button>
//           <IconButton color="inherit">🛒 (1)</IconButton>
//         </Box>
//       </Box>

//       {/* Cart Content */}
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           alignItems: 'flex-start',
//           justifyContent: 'space-around',
//           width: '100%',
//           margin: '2rem auto',
//           padding: '0 2rem',
//         }}
//       >
//         {/* Product Image */}
//         <Box
//           component="img"
//           src={product.image}
//           alt={product.name}
//           sx={{
//             width: { xs: '90%', md: '350px' },
//             borderRadius: '8px',
//             alignSelf: 'center',
//             flexShrink: 0,
//           }}
//         />

//         {/* Product Details */}
//         <Box sx={{ flex: 1, minWidth: '300px', maxWidth: '800px' }}>
//           <Typography variant="h6" fontWeight="bold" mb={1} color="black">{product.name}</Typography>
//           <Typography variant="body1" mb={2} color="black">${product.price.toFixed(2)}</Typography>

//           {/* Quantity Controls */}
//           <Box display="flex" alignItems="center" mb={2}>
//             <Typography variant="body1" mr={1} color="black">Quantity:</Typography>
//             <IconButton sx={{ backgroundColor: '#4E408F', color: '#fff', mx: 1 }}><RemoveIcon /></IconButton>
//             <Typography color="black">{product.quantity}</Typography>
//             <IconButton sx={{ backgroundColor: '#4E408F', color: '#fff', mx: 1 }}><AddIcon /></IconButton>
//             <IconButton color="error" sx={{ ml: 2 }}><DeleteIcon /></IconButton>
//           </Box>

//           {/* Total and Checkout */}
//           <Typography variant="h5" fontWeight="bold" mb={2} color="black">Total: ${product.price.toFixed(2)}</Typography>
//           <Button variant="contained" sx={{ backgroundColor: '#4E408F', '&:hover': { backgroundColor: '#3b3173' }, padding: '0.75rem 2rem', fontSize: '1rem' }}>PROCEED TO CHECKOUT</Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default CartPage;

import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';


function CartPage() {
  const product = {
    name: "WRATT 1",
    price: 14.99,
    image: '/src/assets/logo.png',
    quantity: 1,
  };

  return (
    <Box sx={{ backgroundColor: '#F5F3F4', minHeight: '100vh', width: '100%' }}>
      
      {/* Navbar */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#4E408F',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
        }}
      >
        <Box display="flex" alignItems="center">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            style={{ height: '50px', marginRight: '1rem' }}
          />
          <Typography variant="h6">Bootcamp Shopping Cart</Typography>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/">HOME</Button>
          <Button color="inherit">SHOP</Button>
          <IconButton color="inherit">🛒 (1)</IconButton>
        </Box>
      </Box>

      {/* Cart Item */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'center',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '2rem auto',
          backgroundColor: '#fff',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        {/* Product Image */}
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: { xs: '80%', md: '250px' },
            borderRadius: '8px',
          }}
        />

        {/* Product Deetals */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'center' },
              justifyContent: 'space-between',
              width: '100%',
              gap: '1rem',
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="black" align="center">
              {product.name}
            </Typography>
            <Typography variant="h6" color="black">
              ${product.price.toFixed(2)}
            </Typography>
          </Box>

          {/* Quantity Contrls */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Typography variant="body1" color="black">Quantity:</Typography>
            <IconButton sx={{ backgroundColor: '#4E408F', color: '#fff' }}>
              <RemoveIcon />
            </IconButton>
            <Typography color="black">{product.quantity}</Typography>
            <IconButton sx={{ backgroundColor: '#4E408F', color: '#fff' }}>
              <AddIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Total annd Checkout Button */}
      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h5" fontWeight="bold" color="black" mb={2}>
          Total: ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4E408F',
            '&:hover': { backgroundColor: '#3b3173' },
            color: '#fff',
            fontSize: '1rem',
            padding: '0.75rem 2rem',
            borderRadius: '12px',
            textTransform: 'none',
          }}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default CartPage;

