import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import ShopItem from './ShopItem';


function ShoppingItemList({ items }) {

    // this is the state we will use to hold the response from the api
    const [products, setProducts] = useState([]);
    const router = useRouter()

    // useEffect(async () => {
    //     /* fetch list of products here */
    //     /* update product state with response */
    // }, [])

    const handleAddToCart = async (product) => {
        /* add product to cart via api */
        /* redirect to the cart page */
    }

    return (
        <Grid container direction="row" spacing={1}>
            {items.map((el, index) => {
                return <Grid item key={index}>
                    <ShopItem
                        name={el.name}
                        price={el.price}
                        description={el.description}
                        imageURL={el.imageURL} />
                </Grid>
            })}
        </Grid>
    )
}

export default ShoppingItemList