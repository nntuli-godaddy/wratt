import React from 'react';
import { useState, useEffect } from 'react'
import { Card, CardContent, CardActions, Button, Grid, Typography, CardMedia } from '@mui/material'
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
                        product_id={cartItem.product_id}
                        name={cartItem.name}
                        id={cartItem.id}
                        price={cartItem.price}
                        quantity={cartItem.quantity} 
                        onRemoveFromCart={deleteItem}
                    />
                </Grid>
            )}
        </Grid>
        <div style={{"padding-top": "20px"}}>
            <Typography variant="h3">
                Total: ${totalPrice}
            </Typography>
        </div>
    </div>
  );
}

export default Cart;