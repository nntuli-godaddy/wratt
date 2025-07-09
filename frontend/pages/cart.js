import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'

import { Container, Typography } from '@mui/material'
const testItem = {
  id: 1,
  name: "Test Product",
  description: "Test description",
  price: 29.99,
  quantity: 2,
  is_on_sale: true,
  salePrice: 19.99,
  image_url: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg"
};

export const CartPage = () => (
  <Container>
    <Head title='Cart'/>
    <div>
      <Typography variant="h3" fontWeight={400} fontSize={60}>My Cart</Typography>
    </div>
    <div style={{ padding: "20px" }}>
      <Link href="/shop" style ={{color: 'black'}} fontWeight={100} fontSize={100}>Continue shopping</Link>
    </div>
    <div style = {{ padding: "20px" }}>
      <CartItem {...testItem} />
    </div>
    <Cart />
  </Container>
);

export default CartPage;