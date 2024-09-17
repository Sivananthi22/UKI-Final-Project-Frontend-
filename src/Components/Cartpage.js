import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/CartPage.css'; // Add your custom CSS

const CartPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const customOrder = location.state?.customOrder || {}; // Get the custom order details passed from the previous page

  const handleOrderMore = () => {
    navigate('/menu'); // Redirect to the MenuPage
  };

  const handleCheckout = () => {
    navigate('/login'); // Redirect to the LoginPage
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Custom Order</h2>
      <div className="cart-summary">
        <h3>Product Details</h3>
        <p><strong>Product Type:</strong> {customOrder.productType}</p>
        <p><strong>Flavor:</strong> {customOrder.flavor}</p>
        <p><strong>Filling:</strong> {customOrder.filling}</p>
        <p><strong>Dietary Preferences:</strong> {customOrder.dietaryPreferences}</p>
        <p><strong>Pickup Date:</strong> {customOrder.pickupDate}</p>
      </div>
      <div className="cart-buttons">
        <button className="order-more-btn" onClick={handleOrderMore}>
          Order More
        </button>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
