// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/Sidebar.css'; // Ensure you create a CSS file for Sidebar styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Nutri Bakery</h2>
      </div>
      <ul>
        <li><Link to="/admin-dashboard" className="sidebar-item">Dashboard</Link></li>
        <li><Link to="/order-maintainer" className="sidebar-item">Orders</Link></li>
        <li><Link to="/products-maintain" className="sidebar-item">Products</Link></li>
        <li><Link to="/customers" className="sidebar-item">Customers</Link></li>
        <li><Link to="/settings" className="sidebar-item">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
