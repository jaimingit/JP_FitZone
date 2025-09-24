import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ isDarkMode }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://jp-fitzone.onrender.com/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user', JSON.stringify(data.user));
        window.dispatchEvent(new Event('authChange'));

        alert('✅ Login successful!');
        navigate('/');
      } else {
        if (data.action === 'register') {
          const shouldRegister = confirm(`❌ ${data.message}\n\n💡 ${data.suggestion}\n\nGo to registration page?`);
          if (shouldRegister) navigate('/register');
        } else if (data.action === 'retry') {
          alert(`❌ ${data.message}\n💡 ${data.suggestion}`);
        } else {
          alert(`❌ ${data.message || 'Login failed'}`);
        }
      }
    } catch (error) {
      alert('❌ Network error. Please try again.');
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
        }`}>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
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
          <div className="mb-6">
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

          <button type="submit" className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}>
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Don't have an account?
            <button onClick={() => navigate('/register')} className={`hover:underline ml-1 transition-colors duration-300 ${
              isDarkMode ? 'text-blue-500' : 'text-blue-600'
            }`}>
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
