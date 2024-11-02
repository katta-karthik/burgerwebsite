import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-[#070e16] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Berger Hut</h2>
            <p className="text-gray-300 mb-6">
              Experience the finest gourmet burgers in a cozy and rustic atmosphere. At Berger Hut, 
              we are dedicated to delivering exceptional flavors that will tantalize your taste buds.
            </p>
            <p className="text-gray-300 mb-8">
              Our chefs meticulously craft each burger using locally sourced ingredients and unique 
              flavor combinations. From juicy beef patties to mouthwatering vegetarian options, 
              there's something for everyone.
            </p>
            <a href="#menu" className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
              Explore Our Menu
            </a>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80"
              alt="About Berger Hut"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}