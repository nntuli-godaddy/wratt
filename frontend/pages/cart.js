import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import Cart from '../components/Cart'

import { Container, Typography } from '@mui/material'

export const CartPage = () => (
  <Container>
    <Head title='Cart'/>
    <div>
      <Typography variant="h3" fontWeight={400} fontSize={60}>My Cart</Typography>
    </div>
    <div>
      <Link href="/shop" style ={{color: 'black'}} fontWeight={100} fontSize={100}>Browse shop</Link>
    </div>
    <Cart />
  </Container>
);

export default CartPage;