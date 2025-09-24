import React from 'react';

function IDCard({ userDetails }) {
  const calculateEndDate = (startDate, durationMonths) => {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setMonth(end.getMonth() + durationMonths);
    return end.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const endDate = calculateEndDate(userDetails.planStartDate, userDetails.planDuration);

  const generateBarcode = (userId) => {
    return userId.split('').map(char => {
      const height = Math.random() * 40 + 20; 
      return { char, height };
    });
  };

  const barcode = generateBarcode(userDetails.userId);

  return (
    <div className="max-w-xs mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border-2 border-blue-500 shadow-xl professional-glow">
      
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
          <span className="text-lg font-bold text-white">JP</span>
        </div>
        <h2 className="text-lg font-bold text-blue-500">JP FitZone</h2>
        <p className="text-gray-300 text-xs">Premium Gym Membership</p>
      </div>

     
      <div className="w-20 h-24 bg-gray-700 rounded-lg mx-auto mb-3 border-2 border-blue-400 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <i className="fas fa-user text-lg mb-1"></i>
          <p className="text-xs">Photo</p>
        </div>
      </div>

     
      <div className="space-y-2 mb-4">
        <div className="bg-gray-800 rounded-lg p-2 border border-gray-600">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Full Name</p>
          <p className="text-white font-semibold text-sm">{userDetails.fullName}</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-2 border border-gray-600">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Member ID</p>
          <p className="text-blue-400 font-mono font-bold text-sm">{userDetails.userId}</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-2 border border-gray-600">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Plan</p>
          <p className="text-white font-semibold text-sm">{userDetails.planName}</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-2 border border-gray-600">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Valid From</p>
          <p className="text-white font-semibold text-sm">{new Date(userDetails.planStartDate).toLocaleDateString()}</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-2 border border-gray-600">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Valid Until</p>
          <p className="text-white font-semibold text-sm">{endDate}</p>
        </div>
      </div>

      {/* Simple Barcode */}
      <div className="bg-white p-2 rounded-lg mb-3">
        <div className="flex justify-center items-end space-x-1 h-8">
          {barcode.map((bar, index) => (
            <div
              key={index}
              className="bg-black"
              style={{
                width: '2px',
                height: `${bar.height}px`
              }}
            ></div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-600 mt-1 font-mono">{userDetails.userId}</p>
      </div>

      {/* Footer */}
      <div className="text-center">
        <p className="text-xs text-gray-400">Scan barcode for membership verification</p>
        <p className="text-xs text-gray-500 mt-1">© 2025 JP FitZone</p>
      </div>
    </div>
  );
}

export default IDCard;
