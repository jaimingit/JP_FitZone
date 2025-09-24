import React from 'react';

function Home({ addToCart, isDarkMode }) {
  return (
    <div>
      <section className={`relative h-screen flex items-center justify-center transition-colors duration-300 ${
        isDarkMode ? 'bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card' : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300'
      }`}>
        <div className={`absolute inset-0 transition-colors duration-300 ${
          isDarkMode ? 'bg-black/50' : 'bg-black/20'
        }`}></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Transform Your
            <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-colors duration-300 ${
              isDarkMode ? 'from-blue-500 to-blue-400' : 'from-blue-600 to-blue-500'
            }`}>
              Body & Mind
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join JP FitZone and unlock your potential with world-class trainers and equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const plansSection = document.getElementById('categories');
                if (plansSection) {
                  plansSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className={`px-8 py-4 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Start Your Journey
            </button>
            <button
              onClick={() => {
                const plansSection = document.getElementById('plans');
                if (plansSection) {
                  plansSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className={`border-2 px-8 py-4 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              View Plans
            </button>
          </div>
        </div>
      </section>

      <section id="plans" className={`py-20 px-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'
      }`}>
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

      <section className={`py-20 px-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'
      }`} id='categories'>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Workout <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-blue-500' : 'text-blue-600'
            }`}>Categories</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className={`rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${
              isDarkMode ? 'bg-dark-card' : 'bg-white'
            }`}>
              <i className={`fas fa-dumbbell text-4xl mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-blue-500' : 'text-blue-600'
              }`}></i>
              <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Strength</h3>
            </div>
            <div className={`rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${
              isDarkMode ? 'bg-dark-card' : 'bg-white'
            }`}>
              <i className="fas fa-heartbeat text-4xl text-red-500 mb-4"></i>
              <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Cardio</h3>
            </div>
            <div className={`rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${
              isDarkMode ? 'bg-dark-card' : 'bg-white'
            }`}>
              <i className="fas fa-leaf text-4xl text-green-500 mb-4"></i>
              <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Yoga</h3>
            </div>
            <div className={`rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${
              isDarkMode ? 'bg-dark-card' : 'bg-white'
            }`}>
              <i className="fas fa-fire text-4xl text-orange-500 mb-4"></i>
              <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>CrossFit</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="trainers" className={`py-20 px-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'
      }`}>
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

      <section className={`py-20 px-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Success <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-blue-500' : 'text-blue-600'
            }`}>Stories</span>
          </h2>
          <div className="overflow-x-auto testimonial-slider">
            <div className="flex space-x-6 pb-4">
              <div className={`rounded-2xl p-8 min-w-80 flex-shrink-0 transition-colors duration-300 ${
                isDarkMode ? 'bg-dark-card' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors duration-300 ${
                    isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                  }`}>
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <div>
                    <h4 className={`font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>neha Sharma</h4>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>JP FitZone transformed my life! Lost 8 kg in 6 months with their amazing trainers and community support.</p>
              </div>
              <div className={`rounded-2xl p-8 min-w-80 flex-shrink-0 transition-colors duration-300 ${
                isDarkMode ? 'bg-dark-card' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors duration-300 ${
                    isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                  }`}>
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <div>
                    <h4 className={`font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>meet patel</h4>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>The best gym experience I've ever had. The equipment is top-notch and the staff is incredibly supportive!</p>
              </div>
              <div className={`rounded-2xl p-8 min-w-80 flex-shrink-0 transition-colors duration-300 ${
                isDarkMode ? 'bg-dark-card' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <div>
                    <h4 className={`font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>raj yadav</h4>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>From beginner to powerlifter in one year! The personalized training programs here are incredible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
