import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component

function UserDashboard() {
  return (
    <div>
      <Navbar/>
      <h1>User's Dashboard!</h1>
      <p>Here you can manage your account and view your orders.</p>
    </div>
  );
}

export default UserDashboard;
