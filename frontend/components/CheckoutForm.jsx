

import React, { useState, useEffect } from 'react';
import styles from '../CheckoutForm.module.css';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [width, height] = useWindowSize();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch('http://localhost:8000/v1/cartitems');
        const data = await response.json();
        if (Array.isArray(data)) {
          setCartItems(data);
        } else {
          console.error('Cart data is not an array:', data);
        }
      } catch (err) {
        console.error('Failed to fetch cart items:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchCart();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  if (submitted) {
      return (
      <div className={styles.thankYouContainer}>
      <Confetti width={width} height={height} />
        <div className={styles.thankYouCard}>
          <h2>🎉 Thank You!</h2>
          <p>Your order has been placed successfully.</p>
          <p>We've sent a confirmation to your email.</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Checkout</h2>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Shipping Address</label>
            <input name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Card Number</label>
            <input name="cardNumber" value={formData.cardNumber} onChange={handleChange} required maxLength={16} />
          </div>
          <div className={styles.inlineInputs}>
            <div className={styles.formGroup}>
              <label>Expire</label>
              <input name="expiry" value={formData.expiry} onChange={handleChange} required placeholder="MM/YY" />
            </div>
            <div className={styles.formGroup}>
              <label>CVV</label>
              <input name="cvv" value={formData.cvv} onChange={handleChange} required maxLength={4} />
            </div>
          </div>
          <button type="submit" className={styles.button}>Place Order</button>
        </form>
        {/* Order Summary */}
        <div className={styles.summary}>
          <h3>Order Summary</h3>
          {loading ? (
            <p>Loading cart...</p>
          ) : cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div className={styles.summaryItem} key={item.id}>
                  <p>{item.name} (x{item.quantity})</p>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className={styles.summaryItemTotal}>
                <p>Total:</p>
                <span>${totalPrice}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}









