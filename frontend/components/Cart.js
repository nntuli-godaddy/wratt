import React from 'react';
import { useState, useEffect } from 'react'
import { Card, CardContent, CardActions, Button, Grid, Typography, CardMedia, Box } from '@mui/material'
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
    const totalPrice = cartItems.map(item => item.price * item.quantity).reduce((a,b) => a + b, 0)

  return (
    <div>
        <Grid container direction="column" spacing={3}>
        {
            cartItems.map(cartItem =>
                <Grid item xs={6}>
                <CartItem 
                    name={cartItem.name}
                    description={cartItem.description}
                    id={cartItem.id}
                    image_url={cartItem.image_url}
                    price={cartItem.price}
                    quantity={cartItem.quantity} 
                    is_on_sale={cartItem.is_on_sale}
                    salePrice={cartItem.salePrice}
                    onRemoveFromCart={deleteItem}
                />
                </Grid>
            )}
        </Grid>
        <div style={{ paddingTop: "20px" }}>
            <Card sx={{ p: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h4">
                    Subtotal: <b>${totalPrice}</b>
                </Typography>
                <Button variant="contained" color="primary">
                    Proceed to Checkout
                </Button>
                </Box>
            </Card>
        </div>
    </div>
  );
}

export default Cart;