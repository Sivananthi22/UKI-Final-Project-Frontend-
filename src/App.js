import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Components/Landingpage';
import UserDashboard from './Components/Userdashboard';
import AdminDashboard from './Components/Admindashboard';
import ContactUs from './Components/Contactus';
import MenuSection from './Components/Menupage';
import ProductList from './Components/Productlist';
import Productsmaintain from './Components/Productsmaintain';
import CustomizePage from './Components/CustomizePage';  
import CartPage from './Components/Cartpage';
import LoginPage from './Components/LoginPage'; // Importing LoginPage
//import OrdersMaintainer from './Components/Ordermaintain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/products-maintain" element={<Productsmaintain/>}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/menu" element={<MenuSection />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/customize" element={<CustomizePage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* <Route path="/order-maintainer" element={<OrdersMaintainer/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
