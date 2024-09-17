import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './Productlist.css'; // Ensure this path is correct

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/category/${category}`);
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  const handleAddToCart = (product) => {
    // Cart logic
    alert(`${product.name} has been added to your cart!`);
  };

  const handleCustomizeClick = (product) => {
    navigate(`/customize`, { state: { product } });
  };

  return (
    <div>
      <Navbar />
      <div className="product-list container">
        <h2 className="product-list-title">{category.toUpperCase()}</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="products">
          {products.length === 0 ? (
            <p>No products found in this category.</p>
          ) : (
            products.map((product) => (
              <div key={product._id} className="product-item">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">Rs.{product.price.toFixed(2)}</p>
                  <p className="product-quantity">Quantity: {product.quantity}</p> {/* Display quantity */}
                  <div className="button-container">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="customize-btn"
                      onClick={() => handleCustomizeClick(product)}
                    >
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
