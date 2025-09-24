import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart, clearCart, removeFromCart, isDarkMode }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'UPI Payment'
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    if (!token) {
      alert('Please login to proceed with payment');
      navigate('/login');
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart,
          paymentDetails: formData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (cart.length === 0) {
          alert('Your cart is empty!');
          return;
        }
        if (cart.length > 1) {
          alert('You can only purchase one plan at a time. Please remove extra plans from your cart.');
          return;
        }

        alert(data.message);
        clearCart();
        navigate('/order');
      } else {
        alert(data.message || 'Payment failed');
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
    <div className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Checkout</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className={`rounded-2xl p-8 border transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Order Summary</h3>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className={`flex justify-between items-center py-3 border-b transition-colors duration-300 ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{item.name}</h4>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Monthly subscription</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-blue-500' : 'text-blue-600'
                    }`}>₹{item.price.toLocaleString()}</span>
                    <button onClick={() => removeFromCart(item.id)} className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-600'
                    }`}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={`border-t pt-4 transition-colors duration-300 ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className={`flex justify-between items-center text-xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <span>Total:</span>
                <span className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}>₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className={`rounded-2xl p-8 border transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Payment Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option>UPI Payment</option>
                  <option>Credit/Debit Card</option>
                  <option>Net Banking</option>
                </select>
              </div>
              <button type="submit" className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Complete Purchase
              </button>
            </form>
            <div className="text-center mt-4">
              <button onClick={() => window.location.href='/'} className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'
              }`}>
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
