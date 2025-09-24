import React from 'react';

function Trainers({ isDarkMode }) {
  return (
    <div className={`p-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'
    }`}>
       <section id="trainers" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Meet Our <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-blue-500' : 'text-blue-600'
            }`}>Trainers</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`rounded-2xl p-6 text-center transition-colors duration-300 ${
              isDarkMode ? 'bg-dark-card' : 'bg-white'
            }`}>
              <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300 ${
                isDarkMode ? 'bg-gradient-to-br from-blue-500 to-blue-400' : 'bg-gradient-to-br from-blue-600 to-blue-500'
              }`}>
                <i className="fas fa-user text-2xl text-white"></i>
              </div>
              <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Priya Sharma</h3>
              <p className={`mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-blue-500' : 'text-blue-600'
              }`}>Strength & Conditioning</p>
              <p className={`mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>5+ years experience in powerlifting and functional fitness</p>
              <div className="flex justify-center space-x-4">
                <i className={`fab fa-instagram text-xl cursor-pointer transition-colors duration-300 ${
                  isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
                }`}></i>
                <i className={`fab fa-twitter text-xl cursor-pointer transition-colors duration-300 ${
                  isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
                }`}></i>
                <i className={`fab fa-linkedin text-xl cursor-pointer transition-colors duration-300 ${
                  isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
                }`}></i>
              </div>
            </div>
            <div className={`rounded-2xl p-6 text-center transition-colors duration-300 ${
              isDarkMode ? 'bg-dark-card' : 'bg-white'
            }`}>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user text-2xl text-white"></i>
              </div>
              <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Arjun Patel</h3>
              <p className={`mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-blue-500' : 'text-blue-600'
              }`}>CrossFit & HIIT</p>
              <p className={`mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Former Olympic athlete specializing in high-intensity training</p>
              <div className="flex justify-center space-x-4">
                <i className={`fab fa-instagram text-xl cursor-pointer transition-colors duration-300 ${
                  isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
                }`}></i>
                <i className={`fab fa-twitter text-xl cursor-pointer transition-colors duration-300 ${
                  isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
                }`}></i>
                <i className={`fab fa-linkedin text-xl cursor-pointer transition-colors duration-300 ${
                  isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'
                }`}></i>
              </div>
            </div>
            <div className={`rounded-2xl p-6 text-center transition-colors duration-300 ${
              isDarkMode ? 'bg-dark-card' : 'bg-white'
            }`}>
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user text-2xl text-white"></i>
              </div>
              <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Kavya Reddy</h3>
              <p className="text-purple-400 mb-4">Yoga & Pilates</p>
              <p className={`mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Certified yoga instructor with focus on mindfulness and flexibility</p>
              <div className="flex justify-center space-x-4">
                <i className="fab fa-instagram text-xl hover:text-purple-400 cursor-pointer"></i>
                <i className="fab fa-twitter text-xl hover:text-purple-400 cursor-pointer"></i>
                <i className="fab fa-linkedin text-xl hover:text-purple-400 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainers;
