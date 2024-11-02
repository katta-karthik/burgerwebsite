import React from 'react';

export default function Reservations() {
  return (
    <section id="reservations" className="py-20 bg-[#070e16]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Make a Reservation</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                required
              />
              <input
                type="number"
                placeholder="Number of Guests"
                min="1"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                required
              />
              <input
                type="date"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                required
              />
              <input
                type="time"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                required
              />
            </div>
            <textarea
              placeholder="Special Requests"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition"
            >
              Make Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}