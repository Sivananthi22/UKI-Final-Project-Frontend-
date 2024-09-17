import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import front from '/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/Images/fp1.jpg'; // Adjust the path
import './Landingpage.css';

function Homepage() {
  return (
    <div>
      <Navbar />

      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2>Bite into pure delight</h2>
              <p>
                At Nutri Bakery, we’re dedicated to blending health and taste in every bite. Our bakery products are crafted with nutrient-rich ingredients to
                support your well-being while satisfying your cravings.
              </p>
              <Link to="/menu" className="btn btn-primary">Explore more</Link>
            </div>
            <div className="col-md-6">
              <img src={front} alt="Main" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-section" style={{ backgroundColor: '#f7f1e3', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center mb-5">How it works?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="how-it-works-item">
                <i className="fa fa-shopping-bag mb-3" style={{ fontSize: '36px' }}></i>
                <h4>1. Choose Your Product</h4>
                <p>Unleash your creativity by customizing your favorite treats—whether it's a cake, bread, or pastry.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="how-it-works-item">
                <i className="fa fa-utensils mb-3" style={{ fontSize: '36px' }}></i>
                <h4>2. Customize Your Flavors</h4>
                <p>Craft your perfect order by selecting from an array of mouthwatering flavors designed just for you.</p>
                <button className="btn btn-primary">Start Create</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="how-it-works-item">
                <i className="fa fa-shopping-cart mb-3" style={{ fontSize: '36px' }}></i>
                <h4>3. Add to Cart</h4>
                <p>Double-check your custom order to make sure it's exactly as you want it, then add it to your cart.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
