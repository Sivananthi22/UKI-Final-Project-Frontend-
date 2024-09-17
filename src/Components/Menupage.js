import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Menupage.css';

import croissantsImage from './Images/croissants.jpg';
import cupcakesImage from './Images/cupcakes.jpg';
import cakesImage from './Images/cakes.jpg';
import bunsImage from './Images/buns.jpg';
import breadImage from './Images/Bread.jpg'; // Add your bread image

const MenuSection = () => {
  const menuItems = [
    { name: 'CROISSANTS', image: croissantsImage, category: 'croissants' },
    { name: 'CUPCAKES', image: cupcakesImage, category: 'cupcakes' },
    { name: 'CAKES', image: cakesImage, category: 'cakes' },
    { name: 'BUNS', image: bunsImage, category: 'buns' },
    { name: 'BREAD', image: breadImage, category: 'bread' } // Add the bread category
  ];

  return (
    <div>
      <Navbar />
      <div className="menu-section container">
        <h2 className="menu-title">Explore our menu</h2>
        <p className="menu-subtitle">Browse our menu for a taste of perfection in every bite</p>
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <Link key={index} to={`/products/${item.category}`} className="menu-item">
              <img
                src={item.image}
                alt={item.name}
                className="menu-image"
              />
              <div className="menu-item-name">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
