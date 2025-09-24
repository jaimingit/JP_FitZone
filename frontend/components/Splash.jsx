import React from 'react';

function Splash() {
  return (
    <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50">
      <div className="splash-animation text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
          JP FitZone
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mt-4">Premium Fitness Experience</p>
      </div>
    </div>
  );
}

export default Splash;
