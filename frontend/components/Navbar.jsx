import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount, isDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setProfileDropdownOpen(false); 
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setMobileMenuOpen(false); 
  };

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = sessionStorage.getItem('token');
      const userData = sessionStorage.getItem('user');

      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setIsAuthenticated(true);
          setUser(parsedUser);
        } catch (error) {
          console.error('Error parsing user data:', error);
          // Clear invalid data
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuthStatus();

    const handleStorageChange = (e) => {
      if (e.key === 'token' || e.key === 'user') {
        checkAuthStatus();
      }
    };

    const handleAuthChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);

    window.dispatchEvent(new Event('authChange'));

    window.location.href = '/';
  };

  return (
    <nav className={`backdrop-blur-md fixed w-full top-0 z-50 border-b shadow-lg transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-card/95 border-gray-700' : 'bg-white/95 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent transition-colors duration-300 ${
              isDarkMode ? 'from-blue-500 to-blue-400' : 'from-blue-600 to-blue-500'
            }`}>
              JP FitZone
            </h2>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search workouts, trainers, products..."
                className={`w-full border rounded-lg px-4 py-2 pl-10 focus:outline-none transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-600 focus:border-blue-500' : 'bg-gray-100 border-gray-300 focus:border-blue-500'
                }`}
              />
              <i className={`fas fa-search absolute left-3 top-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}></i>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link to="/" className={`hidden md:block transition-colors font-medium ${
              isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
            }`}>
              Home
            </Link>
            <Link to="/plans" className={`hidden md:block transition-colors font-medium ${
              isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
            }`}>
              Plans
            </Link>

            <Link to="/trainers" className={`hidden md:block transition-colors font-medium ${
              isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
            }`}>
              Trainers
            </Link>

            {isAuthenticated && (
              <Link to="/order" className={`hidden md:block transition-colors font-medium ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}>
                My Membership
              </Link>
            )}

            {/* Profile Section */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className={`flex items-center space-x-2 transition-colors ${
                    isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                  }`}>
                    <span className="text-white font-semibold text-sm">
                      {user.fullName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <i className="fas fa-chevron-down text-sm"></i>
                </button>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                  <div className={`absolute right-0 mt-2 w-48 border rounded-lg shadow-lg z-50 transition-colors duration-300 ${
                    isDarkMode ? 'bg-dark-card border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <div className="p-4 border-b border-gray-600">
                      <p className={`font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-blue-500' : 'text-blue-600'
                      }`}>{user.fullName}</p>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{user.email}</p>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={handleLogout}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          isDarkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-500 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-sign-out-alt mr-2"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Login
              </Link>
            )}
            <Link to="/checkout" className="relative">
              <i className={`fas fa-shopping-cart text-xl transition-colors ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}></i>
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden">
              <i className={`fas fa-bars text-xl transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden pb-4 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card' : 'bg-white'
          }`}>
            <div className="flex flex-col space-y-2">
              <input type="text" placeholder="Search..." className={`border rounded-lg px-4 py-2 mb-2 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-300'
              }`} />
              <Link to="/" className={`text-left transition-colors py-2 block ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`} onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/plans" className={`text-left transition-colors py-2 block ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`} onClick={() => setMobileMenuOpen(false)}>
                Plans
              </Link>

              <Link to="/trainers" className={`text-left transition-colors py-2 block ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`} onClick={() => setMobileMenuOpen(false)}>
                Trainers
              </Link>
              {isAuthenticated && (
                <Link to="/order" className={`text-left transition-colors py-2 block ${
                  isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
                }`} onClick={() => setMobileMenuOpen(false)}>
                  My Membership
                </Link>
              )}
              <Link to="/checkout" className={`text-left transition-colors py-2 block ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`} onClick={() => setMobileMenuOpen(false)}>
                Checkout
              </Link>

              {/* Mobile Profile Section */}
              {isAuthenticated && user ? (
                <div className={`border-t pt-2 mt-2 transition-colors duration-300 ${
                  isDarkMode ? 'border-gray-600' : 'border-gray-200'
                }`}>
                  <div className="flex items-center space-x-3 p-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                    }`}>
                      <span className="text-white font-semibold">
                        {user.fullName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className={`font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-blue-500' : 'text-blue-600'
                      }`}>{user.fullName}</p>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors mt-2 ${
                      isDarkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-500 hover:bg-gray-100'
                    }`}
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login" className={`px-4 py-2 rounded-lg font-semibold text-center block transition-colors ${
                  isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`} onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {(profileDropdownOpen || mobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setProfileDropdownOpen(false);
            setMobileMenuOpen(false);
          }}
        />
      )}
    </nav>
  );
}

export default Navbar;
