import React, { useState } from 'react';
import { Menu, User, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onAuthClick: () => void;
  onCartClick: () => void;
  isLoggedIn: boolean;
  cartCount: number;
  userEmail: string;
}

export default function Navbar({ onAuthClick, onCartClick, isLoggedIn, cartCount, userEmail }: NavbarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="fixed w-full bg-[#070e16] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=60&h=60&fit=crop" 
                 alt="Berger Hut Logo" 
                 className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-red-500 transition">Home</a>
            <a href="#about" className="text-white hover:text-red-500 transition">About</a>
            <a href="#menu" className="text-white hover:text-red-500 transition">Menu</a>
            <a href="#reservations" className="text-white hover:text-red-500 transition">Reservations</a>
            <a href="#contact" className="text-white hover:text-red-500 transition">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => isLoggedIn ? setShowUserMenu(!showUserMenu) : onAuthClick()}
                className="text-white hover:text-red-500 transition flex items-center"
              >
                <User className="h-5 w-5 mr-1" />
                {isLoggedIn ? 'Account' : 'Login'}
              </button>

              {isLoggedIn && showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    {userEmail}
                  </div>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      // Add logout functionality here
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onCartClick}
              className="text-white hover:text-red-500 transition flex items-center"
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            <button className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}