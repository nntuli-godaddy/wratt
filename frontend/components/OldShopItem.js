import React from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material'
import {Typography, CardMedia} from '@mui/material';


function ShopItem({ 
    product_id,
    name,
    description,
    image_url,
    price,
    is_on_sale,
    sale_price,
    onAddToCart
}) {

  const addToCart = () => {
    /* Insert logic here  */
    onAddToCart({ product_id, name, description, image_url, price, is_on_sale, sale_price, quantity: 1 })
  }

  return (
    <Card style={{height: "400px"}} sx={"background-color:#e4e2cc"}>
    <CardMedia sx ={{height:170}} image={image_url}/>
    <CardContent sx={"background-color:#f9e5bc"}>
      <Typography variant="h3" fontWeight={60} fontStyle={'italic'}>{name}</Typography> 
      <Typography variant = "h4" fontSize={20}> {description}</Typography>
      <Typography variant="h5" fontSize={20}>${is_on_sale ? sale_price : price}</Typography>
    </CardContent>
      <CardActions>
        <Button onClick={addToCart}> Add </Button>
      </CardActions>
    </Card>
  );
}

export default ShopItem;