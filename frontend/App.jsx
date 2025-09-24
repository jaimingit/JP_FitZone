import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Toggle from './components/Toggle';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import Plans from './pages/Plans';
import Trainers from './pages/Trainers';

function App() {
  const [cart, setCart] = useState([]);
  const [showSplash, setShowSplash] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = (newState) => {
    setIsDarkMode(newState);
  };

  const addToCart = (id, name, price) => {
    if (cart.find(item => item.id === id)) {
      alert('Plan already in cart!');
      return;
    }
    setCart([...cart, { id, name, price, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      {showSplash ? (
        <Splash />
      ) : (
        <BrowserRouter>
          <div className={`app-container min-h-screen flex flex-col transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-bg text-white' : 'bg-white text-gray-900'
          }`}>
            <Navbar cartCount={cart.length} isDarkMode={isDarkMode} />
            <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} isDarkMode={isDarkMode} />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home addToCart={addToCart} isDarkMode={isDarkMode} />} />
                <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
                <Route path="/register" element={<Register isDarkMode={isDarkMode} />} />
                <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} isDarkMode={isDarkMode} />} />
                <Route path="/order" element={<Order isDarkMode={isDarkMode} />} />
                <Route path="/plans" element={<Plans addToCart={addToCart} isDarkMode={isDarkMode} />} />
                <Route path="/trainers" element={<Trainers isDarkMode={isDarkMode} />} />
              </Routes>
            </main>
            <Footer isDarkMode={isDarkMode} />
            <div className="fixed bottom-4 right-4 z-50">
              <Toggle onToggle={handleToggle} defaultValue={isDarkMode} isDarkMode={isDarkMode} />
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
