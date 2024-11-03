import React, { useState } from 'react';
import { Menu, User, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onAuthClick: () => void;
  onCartClick: () => void;
  isLoggedIn: boolean;
  cartCount: number;
  userEmail: string;
  onLogout: () => void;
}

export default function Navbar({ onAuthClick, onCartClick, isLoggedIn, cartCount, userEmail, onLogout }: NavbarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="fixed w-full bg-[#070e16] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              <span className="text-red-500">Burger</span>
              <span className="font-light">Hut</span>
            </div>
          </div>

          {/* Glass-effect Navigation */}
          <nav className="hidden md:flex space-x-1">
            {['Home', 'About', 'Menu', 'Reservations', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 group"
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-200">
                  {item}
                </span>
                <span className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg scale-0 group-hover:scale-100 transition-all duration-200" />
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-1">
            <div className="relative">
              <button
                onClick={() => isLoggedIn ? setShowUserMenu(!showUserMenu) : onAuthClick()}
                className="group px-4 py-2 relative"
              >
                <span className="flex items-center space-x-2 relative z-10">
                  <User className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                    {isLoggedIn ? 'Account' : 'Login'}
                  </span>
                </span>
                <span className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg scale-0 group-hover:scale-100 transition-all duration-200" />
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 group-hover:w-full transition-all duration-300" />
              </button>

              {isLoggedIn && showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-[#0f1923] backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-sm text-white/80 truncate">{userEmail}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onLogout();
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onCartClick}
              className="group px-4 py-2 relative"
            >
              <span className="relative z-10 flex">
                <ShoppingCart className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </span>
              <span className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg scale-0 group-hover:scale-100 transition-all duration-200" />
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>

            <button className="md:hidden group px-4 py-2 relative">
              <span className="relative z-10">
                <Menu className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
              </span>
              <span className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg scale-0 group-hover:scale-100 transition-all duration-200" />
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}