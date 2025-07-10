import React from 'react';
import { useState, useEffect } from 'react'
import { Card, CardContent, CardActions, Button, Grid, Typography, CardMedia, Box, Divider } from '@mui/material'
import CartItem from './CartItem';


function Cart({ 
    props
}) {
    const [cartItems, setCartItems] = useState([]); 

    useEffect(() => {
        async function fetch_it() {
            const response = await fetch('http://localhost:8000/v1/cartitems');
            const json = await response.json();
            setCartItems(json);
        }
        fetch_it();
    }, [])

    function deleteItem(id) {
        fetch(`http://localhost:8000/v1/cartitems/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    const newItems = cartItems.filter(i => i.id != id);
                    setCartItems(newItems);
                } else {
                    alert(`Failed to delete ${id} - ${response.status}`)
                }
            });
    }
    function handleIncrease(id) {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }

    function handleDecrease(id) {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 } 
                    : item
            )
        );
    }

    const totalPrice = cartItems.map(item => item.price * item.quantity).reduce((a,b) => a + b, 0)
    const totalItems = cartItems.map(item => item.quantity).reduce((a, b) => a + b, 0); //Total items

return (
    
  <Box
    sx={{
      display: 'flex', alignItems: 'flex-start', gap: 3, p: 2,
    }}
  >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="column" spacing={3}>
        {cartItems.map(cartItem => (
          <Grid item xs={12} key={cartItem.id}>
            <CartItem 
              {...cartItem}
              onRemoveFromCart={deleteItem}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Order summary widget fixed on the right */}
    <Card
            // OPTION 1: THE WIDGET OVERLAPS THE PRODUCTS
      // sx={{
      //   position: 'fixed',
      //   top: 155,       
      //   right: 20,     
      //   width: 280,
      //   p: 3,
      //   borderRadius: 3,
      //   boxShadow: 4,
      //   backgroundColor: 'white',
      //   zIndex: 1000,  
      // }}
            // OPTION 2: THE PRODUCTS MINIMIZES TO FIT THE WIDGET
    sx={{
    position: 'sticky',
    top: 20,
    alignSelf: 'flex-start',
    width: 280,
    p: 3,
    borderRadius: 3,
    boxShadow: 4,
    backgroundColor: 'white',
  }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        ORDER SUMMARY
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Typography sx={{ mb: 1 }}>
        Total items: <b>{totalItems}</b>
      </Typography>

      <Typography sx={{ mb: 1 }}>
        Subtotal: <b>${totalPrice.toFixed(2)}</b>
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 'bold' }}>
        Estimated total: ${totalPrice.toFixed(2)}
      </Typography>

      <Button variant="contained" fullWidth>
        Proceed to Checkout
      </Button>
    </Card>
  </Box>
);
}

export default Cart;