import React from 'react';

function Footer({ isDarkMode }) {
  return (
    <footer className={`border-t py-12 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-card border-gray-700' : 'bg-gray-100 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4 transition-colors duration-300 ${
              isDarkMode ? 'from-blue-500 to-blue-400' : 'from-blue-600 to-blue-500'
            }`}>
              JP FitZone
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Transform your body and mind with our premium fitness experience.</p>
            <div className="flex space-x-4">
              <a href='https://www.facebook.com/'>
              <i className={`fab fa-facebook text-xl cursor-pointer transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}></i>
              </a>
              <a href='https://www.instagram.com/'>
              <i className={`fab fa-instagram text-xl cursor-pointer transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}></i>
              </a>
              <a href='https://twitter.com/i/flow/login'>
              <i className={`fab fa-twitter text-xl cursor-pointer transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}></i>
              </a>
              <a href='https://www.youtube.com/'>
              <i className={`fab fa-youtube text-xl cursor-pointer transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h4>
            <ul className={`space-y-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <li><a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}>About Us</a></li>
              <li><a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}>Membership</a></li>
              <li><a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}>Classes</a></li>
              <li><a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}>Trainers</a></li>
            </ul>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Support</h4>
            <ul className={`space-y-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <li><a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}>Contact Us</a></li>
              <li><a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}>FAQ</a></li>
              <li><a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}>Privacy Policy</a></li>
              <li><a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}>Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Contact Info</h4>
            <ul className={`space-y-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <li><i className="fas fa-map-marker-alt mr-2"></i>nikol,Ahmedabad</li>
              <li><i className="fas fa-phone mr-2"></i>123456789</li>
              <li><i className="fas fa-envelope mr-2"></i>jpfitzone@gmail.com</li>
              <li><i className="fas fa-clock mr-2"></i>24/7 Access</li>
            </ul>
          </div>
        </div>
        <div className={`border-t mt-8 pt-8 text-center transition-colors duration-300 ${
          isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'
        }`}>
          <p>&copy; 2025 JP FitZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
