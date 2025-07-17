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
   <Card
 sx={{
   height: "100%",
   width: 300,
   borderRadius: 4,
   boxShadow: 5,
   display: "flex",
   flexDirection: "column",
   justifyContent: "space-between",
   backgroundColor: "#fdfaf3",
 }}
>
 <CardMedia
   image={image_url}
   sx={{
     height: 200,
     borderTopLeftRadius: 16,
     borderTopRightRadius: 16,
     backgroundSize: "cover",
   }}
 />


 <CardContent sx={{ padding: 2 }}>
   <Typography
     variant="h5"
     fontWeight="bold"
     gutterBottom
     sx={{ color: "#3d0e5d" }}
   >
     {name}
   </Typography>


   <Typography
     variant="body2"
     sx={{ fontSize: 16, color: "#4a4a4a", marginBottom: 1 }}
   >
     {description}
   </Typography>


   <Typography variant="h6" sx={{ color: is_on_sale ? "crimson" : "#222" }}>
     {is_on_sale ? (
       <>
         <span style={{ textDecoration: "line-through", marginRight: 8 }}>
           ${price}
         </span>
         <strong>${sale_price}</strong>
       </>
     ) : (
       <>${price}</>
     )}
   </Typography>
 </CardContent>


 <CardActions sx={{ padding: 2 }}>
   <Button
     fullWidth
     onClick={addToCart}
     className="add-cart-btn"
   >
     Add to Cart
   </Button>
 </CardActions>
</Card>


 );
}


export default ShopItem;
