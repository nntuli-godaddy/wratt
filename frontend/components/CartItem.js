import React from 'react';
<<<<<<< HEAD
import { Box, Card, CardContent, CardActions, Typography, Button, CardMedia, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartItem({
  id,
  name,
  description,
  image_url,
  price,
  quantity,
  salePrice,
  is_on_sale,
  onRemoveFromCart,
  onIncrease,
  onDecrease,
}) {
  return (
    <Card
      sx={{
        display: 'flex',
        p: 2,
        mb: 3,
        alignItems: 'flex-start',
        borderRadius: 3,
        boxShadow: 3,
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.01)',
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 250, pt: 2 }}
        image={image_url}
        alt={name}
      />
      <Box sx={{ flexGrow: 1 }}>
        <CardContent sx={{ pt: 1, pl: 5 }}>
          {/* Product name with margin bottom */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            {name}
          </Typography>

          {/* Description with more margin bottom */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, letterSpacing: 0.5 }}>
            {description}
          </Typography>

          {/* Price and quantity controls side by side */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Box>
              {is_on_sale ? (
                <>
                  <Typography component="span" sx={{ color: '#d32f2f', fontWeight: 'bold', fontSize: 18 }}>
                    ${salePrice} x {quantity}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ ml: 1, textDecoration: 'line-through', color: '#9e9e9e' }}
=======
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
>>>>>>> origin/main
                  >
                    ${price}
                  </Typography>
                </>
              ) : (
<<<<<<< HEAD
                <Typography component="span" sx={{ fontWeight: 'bold', fontSize: 18 }}>
                  ${price} x {quantity}
                </Typography>
              )}

              <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
                Subtotal: ${is_on_sale ? (salePrice * quantity).toFixed(2) : (price * quantity).toFixed(2)}
              </Typography>
            </Box>

            {/* Quantity controls */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={() => onDecrease(id)}
                size="small"
                sx={{ backgroundColor: '#e3f2fd', '&:hover': { backgroundColor: '#90caf9' }, mr: 1 }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ mx: 1, fontWeight: 'bold', fontSize: 16 }}>{quantity}</Typography>
              <IconButton
                onClick={() => onIncrease(id)}
                size="small"
                sx={{ backgroundColor: '#e3f2fd', '&:hover': { backgroundColor: '#90caf9' } }}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Remove button moved below */}
          <CardActions sx={{ p: 0, mt: 3 }}>
            <Button
              onClick={() => onRemoveFromCart(id)}
              startIcon={<DeleteIcon />}
              variant="outlined"
              sx={{
                color: '#d32f2f',
                borderColor: '#f4c7c3',
                borderRadius: 5,
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#fcebea',
                  borderColor: '#f4c7c3',
                },
              }}
            >
              Remove From Cart
            </Button>
          </CardActions>
        </CardContent>
      </Box>
=======
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
>>>>>>> origin/main
    </Card>
  );
}

<<<<<<< HEAD
export default CartItem;
=======
export default CartItem;
>>>>>>> origin/main
