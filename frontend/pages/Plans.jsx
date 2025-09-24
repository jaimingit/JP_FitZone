import React from 'react';

function Plans({ addToCart, isDarkMode }) {
  return (
    <div className={`p-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'
    }`}>
        <section id="plans" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Choose Your <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-blue-500' : 'text-blue-600'
            }`}>Plan</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`rounded-2xl p-8 border transition-all duration-300 ${
              isDarkMode ? 'bg-dark-card border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-600'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Basic</h3>
              <div className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>₹2,499<span className={`text-lg transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>/month</span></div>
              <ul className={`space-y-3 mb-8 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>Gym Access</li>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>Basic Equipment</li>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>Locker Room</li>
              </ul>
              <button onClick={() => addToCart('basic', 'Basic Plan', 2499)} className={`w-full py-3 rounded-lg transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}>
                Choose Plan
              </button>
            </div>

            <div className={`rounded-2xl p-8 border-2 relative transition-all duration-300 ${
              isDarkMode ? 'bg-dark-card border-blue-500' : 'bg-white border-blue-600'
            }`}>
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-300 ${
                isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'
              }`}>
                Most Popular
              </div>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Standard</h3>
              <div className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>₹4,999<span className={`text-lg transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>/month</span></div>
              <ul className={`space-y-3 mb-8 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>All Basic Features</li>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>Group Classes</li>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>Personal Training (2/month)</li>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>Nutrition Guidance</li>
              </ul>
              <button onClick={() => addToCart('standard', 'Standard Plan', 4999)} className={`w-full py-3 rounded-lg transition-colors ${
                isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Choose Plan
              </button>
            </div>

            <div className={`rounded-2xl p-8 border transition-all duration-300 ${
              isDarkMode ? 'bg-dark-card border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-600'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Premium</h3>
              <div className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>₹8,499<span className={`text-lg transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>/month</span></div>
              <ul className={`space-y-3 mb-8 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>All Standard Features</li>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>Unlimited Personal Training</li>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>VIP Lounge Access</li>
                <li className="flex items-center"><i className={`fas fa-check mr-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-500' : 'text-blue-600'
                }`}></i>Meal Planning</li>
              </ul>
              <button onClick={() => addToCart('premium', 'Premium Plan', 8499)} className={`w-full py-3 rounded-lg transition-colors ${
                isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Plans;
