// src/Components/OrdersMaintainer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/Ordermaintain.css'; // Adjust path as needed
import Sidebar from './Sidebar';

const OrdersMaintainer = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders'); // Adjust endpoint as needed
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-maintainer">
        <Sidebar/>
     <div>
         <header>
        <h1>Order Management</h1>
      </header>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Subscription</th>
            <th>Ordered Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.subscription ? 'Yes' : 'No'}</td>
              <td>
                {order.orderedItems.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </td>
              <td>
                {/* Add buttons or actions as needed */}
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default OrdersMaintainer;
