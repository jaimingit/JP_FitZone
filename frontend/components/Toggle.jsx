import React, { useState, useEffect } from 'react';

function Toggle({ onToggle, defaultValue = false, isDarkMode }) {
  const [isToggled, setIsToggled] = useState(defaultValue);

  useEffect(() => {
    const savedState = localStorage.getItem('toggleState');
    if (savedState !== null) {
      setIsToggled(JSON.parse(savedState));
    }
  }, []);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    localStorage.setItem('toggleState', JSON.stringify(newState));
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className="flex items-center">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isToggled}
            onChange={handleToggle}
          />
          <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${
            isToggled ? 'bg-blue-500' : 'bg-gray-400'
          } professional-glow`}></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out shadow-lg ${
              isToggled ? 'transform translate-x-6' : ''
            }`}
          ></div>
        </div>
        <div className={`ml-3 font-medium transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {isToggled ? 'Dark Mode' : 'Light Mode'}
        </div>
      </label>
    </div>
  );
}

export default Toggle;
