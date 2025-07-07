import React from 'react';
import { Card, CardContent, CardActions, Typography, CardMedia } from '@mui/material'




function ShopItem({ price, name, imageURL, description }) {

    const addToCart = () => {
        /* Insert logic here  */
    }

    return (
        <Card style={{ height: "400px", width: "250px" }}>
            <CardMedia sx={{height: 140}}image={imageURL} />
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
                <button type='submit'> Add To Cart </button>
            </CardActions>
        </Card>
    );
}

export default ShopItem;