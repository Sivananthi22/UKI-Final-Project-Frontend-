import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // For sign-up form
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      }, { withCredentials: true });

      const { role } = response.data; // Expecting the backend to send a role field (e.g., 'admin' or 'user')

      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError('Invalid credentials. Please try again.');
    }
  };

  // Function to handle user signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/signup', { username, email, password }, { withCredentials: true });
      setError('');
      setSuccessMessage('Thank you for signing up! 🎉');
      setShowSuccessModal(true);
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating user:', error.message);
      setError('Error creating user. Please try again.');
    }
  };

  const handleShowSignup = () => {
    setIsLoginForm(false);
    setError('');
    setSuccessMessage('');
  };

  const handleShowLogin = () => {
    setIsLoginForm(true);
    setError('');
    setSuccessMessage('');
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="modal-header">
          <h5 className="modal-title">{isLoginForm ? "Login" : "Sign Up"}</h5>
        </div>
        <div className="modal-body">
          {isLoginForm ? (
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign in</button>
              {error && <p className="text-danger text-center">{error}</p>}
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={handleShowSignup}>Don't have an account? Sign up</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign up</button>
              {error && <p className="text-danger text-center">{error}</p>}
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={handleShowLogin}>Already have an account? Log in</button>
              </div>
            </form>
          )}
        </div>
      </div>
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{successMessage}</p>
            <button onClick={() => navigate('/menu')}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
