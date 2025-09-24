import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IDCard from '../components/IDCard';

function Order({ isDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMembershipData();
  }, []);

  const fetchMembershipData = async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        setError('Please login to view your membership');
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:5001/api/orders/membership', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUserDetails(data.membership);
      } else {
        setError(data.message || 'Failed to fetch membership data');
      }
    } catch (error) {
      console.error('Error fetching membership:', error);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-white'
      }`}>
        <div className="text-center">
          <div className={`animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4 transition-colors duration-300 ${
            isDarkMode ? 'border-blue-500' : 'border-blue-600'
          }`}></div>
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Loading your membership details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-white'
      }`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Error</h2>
          <p className={`mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>{error}</p>
          <div className="space-x-4">
            <button
              onClick={() => navigate('/plans')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              View Plans
            </button>
            <button
              onClick={() => navigate('/')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!userDetails) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-white'
      }`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">No Membership Found</h2>
          <p className={`mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>You haven't purchased any membership plan yet.</p>
          <div className="space-x-4">
            <button
              onClick={() => navigate('/plans')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              View Plans
            </button>
            <button
              onClick={() => navigate('/')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    // Simple download functionality - in a real app, you might use a library like html2canvas
    alert('Download functionality would be implemented here. For now, you can take a screenshot of your ID card!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-bg' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-blue-500' : 'text-blue-600'
          }`}>Congratulations!</h1>
          <p className={`text-xl transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Your membership has been activated successfully</p>
          <p className={`mt-2 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>Your ID card is ready below</p>
        </div>

        {/* ID Card Display */}
        <div className="mb-8">
          <IDCard userDetails={userDetails} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleDownload}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
              isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <i className="fas fa-download mr-2"></i>
            Download ID Card
          </button>

          <button
            onClick={() => navigate('/')}
            className={`border-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
              isDarkMode ? 'bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white' : 'bg-transparent border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            Back to Home
          </button>
        </div>

        {/* Important Information */}
        <div className={`mt-12 rounded-2xl p-6 border transition-colors duration-300 ${
          isDarkMode ? 'bg-dark-card border-gray-700' : 'bg-gray-100 border-gray-200'
        }`}>
          <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-blue-500' : 'text-blue-600'
          }`}>Important Information</h3>
          <div className={`space-y-3 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <p>• Please keep your membership ID card safe and present it at the gym entrance</p>
            <p>• Your membership is valid from {new Date(userDetails.planStartDate).toLocaleDateString()} to {new Date(new Date(userDetails.planStartDate).setMonth(new Date(userDetails.planStartDate).getMonth() + userDetails.planDuration)).toLocaleDateString()}</p>
            <p>• For any queries, contact us at jpfitzone@gmail.com</p>
            <p>• Member ID: <span className={`font-mono transition-colors duration-300 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-500'
            }`}>{userDetails.userId}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
