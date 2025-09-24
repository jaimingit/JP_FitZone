import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ isDarkMode }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store authentication data in session storage
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user', JSON.stringify(data.user));

        // Notify other components of auth change
        window.dispatchEvent(new Event('authChange'));

        alert('Registration successful!');
        navigate('/');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  // Shared Tailwind classes for input fields
  const inputClasses = `w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 transition-colors duration-300 border ${
    isDarkMode
      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
      : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-600'
  }`;

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'
    }`}>
      <div className={`rounded-2xl p-8 w-full max-w-md border transition-colors duration-300 ${
        isDarkMode ? 'bg-dark-card border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-3xl font-bold text-center mb-8 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Join JP FitZone</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-6">
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Already have an account?
            <button
              onClick={() => navigate('/login')}
              className={`hover:underline ml-1 transition-colors duration-300 ${
                isDarkMode ? 'text-blue-500' : 'text-blue-600'
              }`}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
