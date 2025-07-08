import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material'

function CartItem({ product_id, name, id, image_url, price, quantity, onRemoveFromCart }) {
  

    const removeFromCart = () => {
        onRemoveFromCart(id)
    }

  return (
    <Card styles={{display: 'flex'}}>
      <CardMedia
        styles={{width: 200}}
        image={image_url}
        title="Contemplative Reptile"
      />
      <div>
        <CardContent>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h5">{quantity} x ${price}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={removeFromCart} color="primary">Remove from cart</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CartItem;