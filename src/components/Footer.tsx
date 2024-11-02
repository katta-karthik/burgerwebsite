import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070e16] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=60&h=60&fit=crop"
            alt="Berger Hut Logo"
            className="h-12 w-auto mb-6"
          />
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#home" className="hover:text-red-500 transition">Home</a>
            <a href="#about" className="hover:text-red-500 transition">About</a>
            <a href="#menu" className="hover:text-red-500 transition">Menu</a>
            <a href="#reservations" className="hover:text-red-500 transition">Reservations</a>
            <a href="#contact" className="hover:text-red-500 transition">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500 transition">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Berger Hut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}