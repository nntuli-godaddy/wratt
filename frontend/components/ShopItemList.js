import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import ShopItem from './ShopItem';


function ShopItemList() {


 // this is the state we will use to hold the response from the api
 const [products, setProducts] = useState([]);
 const router = useRouter()
 const getProductsUrl = "http://localhost:8000/v1/products";
 const addToCartUrl = "http://localhost:8000/v1/cartitems";


    useEffect(() => {
       async function fetch_it() {
           const resp = await fetch(getProductsUrl);
           console.log(resp);
           const data = await resp.json();
           console.log(data);
           setProducts(data);
       }
       fetch_it();
     }, [])


  const handleAddToCart = async (product) => {
   /* add product to cart via api */
   /* redirect to the cart page */
       const response = await fetch(addToCartUrl, {
           method: 'POST',
           body: JSON.stringify(product),
           headers: { 'content-type': 'application/json' }
       });
      
       router.push("/cart");
   };


 return (
   <Grid container direction="row" spacing={2}>
      {
       products.map(product=> (
       (<Grid >
           <ShopItem 
               key={product.id}
               product_id={product.id}
               name={product.name}
               description={product.description}
               image_url={product.image_url}
               price={product.price}
               is_on_sale={product.is_on_sale}
               sale_price={product.sale_price}
               onAddToCart={handleAddToCart}
           />
       </Grid>)
       ))
      }


   </Grid>
 )
}


export default ShopItemList;
