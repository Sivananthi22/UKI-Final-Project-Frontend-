import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/CustomizePage.css'; // Add your custom CSS

const CustomizePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product || {}; // Get the product details passed from the previous page

  // State for handling form input values
  const [customOrder, setCustomOrder] = useState({
    productType: '',
    flavor: '',
    filling: '',
    dietaryPreferences: '',
    pickupDate: ''
  });

  const handleChange = (e) => {
    setCustomOrder({ ...customOrder, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, maybe add the customized product to the cart
    console.log('Custom Order:', customOrder);
    navigate('/cart'); // Redirect to the cart or any other page after submission
  };

  return (
    <div className="customize-container">
      <h2 className="customize-title">Begin Your Custom Order</h2>
      <form className="customize-form" onSubmit={handleSubmit}>
        <label>
          1. Choose Your Product Type:
          <input
            type="text"
            name="productType"
            value={customOrder.productType}
            onChange={handleChange}
            placeholder="e.g., Cake, Cookie"
            required
          />
        </label>

        <label>
          2. Customize Your Flavor:
          <input
            type="text"
            name="flavor"
            value={customOrder.flavor}
            onChange={handleChange}
            placeholder="e.g., Chocolate, Vanilla"
            required
          />
        </label>

        <label>
          3. Choose Your Filling:
          <input
            type="text"
            name="filling"
            value={customOrder.filling}
            onChange={handleChange}
            placeholder="e.g., Cream, Jam"
            required
          />
        </label>

        <label>
          4. Specify Dietary Preferences:
          <input
            type="text"
            name="dietaryPreferences"
            value={customOrder.dietaryPreferences}
            onChange={handleChange}
            placeholder="e.g., Gluten-Free, Sugar-Free"
          />
        </label>

        <label>
          5. Select Pickup or Delivery Date:
          <input
            type="date"
            name="pickupDate"
            value={customOrder.pickupDate}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-btn">
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default CustomizePage;
