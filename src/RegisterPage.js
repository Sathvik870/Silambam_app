import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './RegisterPage.css';

const RegisterPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="register-container">
      <div className="register-frame">
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
        <h2 className="register-heading">Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
