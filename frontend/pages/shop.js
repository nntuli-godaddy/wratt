import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import ShopItemList from '../components/ShopItemList';

import { Container, Typography } from '@mui/material'

const prop1 = {
  name: "matcha latte",
  description: "sweet, but tastes like grass..",
  price: "10.95",
  image_url: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg"
}

const prop2 = {
  name: "cappuccino",
  description: "it'll wake you up AND taste great!",
  price: "9.50",
  is_on_sale:true,
  sale_price:"7.50",
  image_url: "https://www.mangiabedda.com/wp-content/uploads/2023/05/IMG_1380-2-scaled.jpg"
}

const itemList = [prop1, prop2];


export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div>
      <Typography variant="h3" fontWeight={400} fontSize={60}>My Shop</Typography>
      <Link href="/cart" style ={{color: 'black'}} fontWeight={100} fontSize={200}>View cart</Link>
    </div>
    <div>
      <ShopItemList itemsList={itemList} />
    </div>
  </Container>
);

export default ShopPage;