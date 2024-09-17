// src/components/AdminDashboard.js
import React from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import '/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/Admindashboard.css'; // Ensure you create a CSS file for AdminDashboard styles

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar /> {/* Use the Sidebar component here */}

      <div className="main-content">
        <header>
          <h1>Admin Dashboard</h1>
          {/* Placeholder for future content */}
        </header>
      </div>
    </div>
  );
};

export default AdminDashboard;
