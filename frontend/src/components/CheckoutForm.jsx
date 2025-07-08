import React, { useState } from 'react';
import styles from '../styles/CheckoutForm.module.css';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.thankYouContainer}>
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

        {/* TODO: the items needs to be rendered from our shopping cart backend */}
        <div className={styles.summary}>
          <h3>Order Summary</h3>
          <div className={styles.summaryItem}>
            <p>Product:</p><span>Test Product</span>
          </div>
          <div className={styles.summaryItem}>
            <p>Quantity:</p><span>1</span>
          </div>
          <div className={styles.summaryItemTotal}>
            <p>Total:</p><span>$29.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
