import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-red-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">Amaravathi Andhra Pradesh India</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-red-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">8008456790</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-red-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">vitap@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}