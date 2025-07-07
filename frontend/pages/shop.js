import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import ShopItem from '../components/ShopItem';
import ShopItemList from '../components/ShopItemList';

import { Container, Typography } from '@mui/material'

const itemsList = [
    {
        name: "Cake 1",
        description: "Most delicious cake ever!",
        price: "$333",
        imageURL: "https://myfavcake.com/cdn/shop/files/IMG_0118.jpg?v=1688101928&width=713"
    },
    {
        name: "Cake 2",
        description: "Most delicious cake ever!",
        price: "$333",
        imageURL: "https://myfavcake.com/cdn/shop/files/IMG_0118.jpg?v=1688101928&width=713"
    },
    {
        name: "Cake 3",
        description: "Most delicious cake ever!",
        price: "$333",
        imageURL: "https://myfavcake.com/cdn/shop/files/IMG_0118.jpg?v=1688101928&width=713"
    }

]

export const ShopPage = () => (
    <Container>
        <Head title='Home' />
        <div>
            <Typography variant="h3">My Shop</Typography>
        </div>
        <div>
            <Link href="/cart">View cart</Link>
            <ShopItemList items={itemsList} />
        </div>
    </Container>
);

export default ShopPage;