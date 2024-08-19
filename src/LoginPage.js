import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-frame">
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
        <h2 className="login-heading">Show Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
