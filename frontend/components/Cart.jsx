import React from 'react';

function Cart({ cart, removeFromCart, clearCart, showPage, isDarkMode }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePurchase = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    if (cart.length > 1) {
      alert('You can only purchase one plan at a time. Please remove extra plans from your cart.');
      return;
    }
    if (window.confirm(`Purchase ${cart.map(item => item.name).join(', ')} for ₹${total.toLocaleString()}?`)) {
      alert('🎉 Purchase successful! Your membership is now active!');
      clearCart();
      showPage('home');
    }
  };

  return (
    <>
      <div className={`fixed right-0 top-0 h-full w-96 border-l z-50 shadow-2xl p-6 flex flex-col transform translate-x-full transition-all duration-300 cart-toggle ${
        isDarkMode ? 'bg-dark-card border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-2xl font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Shopping Cart</h3>
          <button onClick={() => document.querySelector('.cart-toggle').classList.add('translate-x-full')} className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
          }`}>
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className={`text-center mt-20 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <i className="fas fa-shopping-cart text-4xl mb-4"></i>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className={`rounded-lg p-4 flex justify-between items-center mb-4 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{item.name}</h4>
                  <p className={`font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-500' : 'text-blue-600'
                  }`}>₹{item.price.toLocaleString()}/month</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-600'
                }`}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={`border-t pt-4 transition-colors duration-300 ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Total:</span>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-blue-500' : 'text-blue-600'
              }`}>₹{total.toLocaleString()}</span>
            </div>
            <div className="space-y-3">
              <button onClick={handlePurchase} className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                <i className="fas fa-credit-card mr-2"></i>Purchase Now
              </button>
              <button
                onClick={() => showPage('checkout')}
                disabled={cart.length > 1}
                className={`w-full py-2 rounded-lg font-medium transition-colors ${
                  cart.length > 1
                    ? 'opacity-50 cursor-not-allowed'
                    : isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Detailed Checkout
              </button>
              <button onClick={clearCart} className={`w-full py-2 rounded-lg font-medium transition-colors ${
                isDarkMode ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-red-600 text-white hover:bg-red-700'
              }`}>
                <i className="fas fa-trash mr-2"></i>Remove All
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cart Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden"
        onClick={() => document.querySelector('.cart-toggle').classList.add('translate-x-full')}
      ></div>
    </>
  );
}

export default Cart;
