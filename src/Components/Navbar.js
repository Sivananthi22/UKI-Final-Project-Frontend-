import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/NB4.png'; // Ensure the path is correct
import '@fortawesome/fontawesome-free/css/all.min.css';
import AuthPage from './LoginPage'; // Import AuthPage

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#8A5525' }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" style={{ height: '120px' }} />
            </Link>
            <ul className="navbar-nav d-flex flex-row align-items-center ms-3">
              <li className="nav-item">
                <Link className="btn mx-3 nav-link-custom" style={{ backgroundColor: 'white', color: '#8A5525' }} to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn mx-3 nav-link-custom" style={{ backgroundColor: 'white', color: '#8A5525' }} to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn mx-3 nav-link-custom" style={{ backgroundColor: 'white', color: '#8A5525' }} to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn mx-3 nav-link-custom" style={{ backgroundColor: 'white', color: '#8A5525' }} to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <form className="d-flex ms-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <button className="btn btn-outline-light ms-3" data-bs-toggle="modal" data-bs-target="#authModal">Login</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="authModalLabel">Authentication</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <AuthPage /> {/* Insert the AuthPage component here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
