import React from 'react';
import { Card, CardContent, CardActions, Typography, CardMedia } from '@mui/material'




function ShopItem({ key, product_id, name, description, image_url, price, onAddToCart }) {

    const addToCart = () => {
        onAddToCart({ product_id, name, price, quantity: 1 })
    }

    return (
        <Card style={{ height: "400px", width: "250px" }}>
            <CardMedia sx={{ height: 140 }} image={image_url} />
            <CardContent>
                <Typography variant="h6">
                    {name}
                </Typography>
                <Typography variant="subtitle2">
                    {description}
                </Typography>
                <Typography>
                    {price}
                </Typography>
            </CardContent>
            <CardActions>
                <button type='submit' onClick={addToCart}> Add To Cart </button>
            </CardActions>
        </Card>
    );
}

export default ShopItem;