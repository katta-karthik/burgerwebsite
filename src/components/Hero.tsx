import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Welcome to Berger Hut</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Experience the Taste of Perfection</p>
            <a href="#menu" className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition">
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}