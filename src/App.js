import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext'; // Import the AuthContext
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import MainPage from './MainPage';
import AdmissionPage from './AdmissionPage';
import CalendarComponent from './Calendar';
import CustomerService from './CustomerService';
import LocationNavigation from './LocationNavigation';
import CourseOutcomePage from './CourseOutcomePage';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
          <Route path="/admission" element={<ProtectedRoute><AdmissionPage /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><CalendarComponent /></ProtectedRoute>} />
          <Route path="/customer-service" element={<ProtectedRoute><CustomerService /></ProtectedRoute>} />
          <Route path="/location" element={<ProtectedRoute><LocationNavigation /></ProtectedRoute>} />
          <Route path="/course-outcome" element={<ProtectedRoute><CourseOutcomePage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
