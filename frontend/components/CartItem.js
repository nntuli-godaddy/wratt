import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button, CardMedia, IconButton, AddIcon } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({name, description, id, image_url, price, quantity, salePrice, is_on_sale, onRemoveFromCart }) {
  

    const removeFromCart = () => {
        onRemoveFromCart(id)
    }

    const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Card sx={{display: 'flex', p: 2, mb: 2, alignItems: 'flex-start'}}>
      <CardMedia
        component="img"
        sx={{ width: 200, pt: 4, alignItems: 'center' }}
        image={image_url}
        alt={name}
      />
       <Box sx={{ flexGrow: 1 }}>
          {/*Title & Description of Item */}
          <CardContent sx={{pt: 4, pl: 5 }}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
             {description}
            </Typography>

             {/*Remove from cart*/}
            <CardActions sx={{p:0}}>
              <Button onClick={removeFromCart} sx={{p:0}}>
                <IconButton onClick={removeFromCart} color="primary" aria-label="Remove from cart">
                  <DeleteIcon />
                </IconButton>
                Remove From Cart
              </Button>
            </CardActions>

            {/*Price (including sale price) */}
            <Box sx={{ textAlign: 'right', minWidth: 150  }}>
              {is_on_sale ? (
                <>
                  <Typography component="span" sx={{ color: "red", fontWeight: "bold", fontSize: 18 }}>
                    price: ${salePrice} x {quantity}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ ml: 1, textDecoration: "line-through", color: "gray" }}
                  >
                    ${price}
                  </Typography>
                </>
              ) : (
                <Typography component="span" sx={{ fontWeight: "bold", fontSize: 18 }}>
                  price: ${price} x {quantity}
                </Typography>
              )}
               
            </Box>

            {/* Handle quantity increase/decrease
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <IconButton onClick={() => handleDecrease(id)} size="small">
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ mx: 1 }}>{quantity}</Typography>
              <IconButton onClick={() => handleIncrease(id)} size="small">
                <AddIcon />
              </IconButton>
            </Box> */}

          </CardContent>

       </Box>
      {/* <div>
        <CardContent>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h5">{quantity} x ${price}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={removeFromCart} color="primary">Remove from cart</Button>
        </CardActions>
      </div> */}
    </Card>
  );
}

export default CartItem;