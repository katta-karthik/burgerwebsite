import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070e16] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <div className="text-3xl font-bold mb-8">
            <span className="text-red-500">Burger</span>
            <span className="font-light">Hut</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#home" className="hover:text-red-500 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-red-500 transition-colors duration-200">About</a>
            <a href="#menu" className="hover:text-red-500 transition-colors duration-200">Menu</a>
            <a href="#reservations" className="hover:text-red-500 transition-colors duration-200">Reservations</a>
            <a href="#contact" className="hover:text-red-500 transition-colors duration-200">Contact</a>
          </nav>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-red-500 transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Burger Hut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}