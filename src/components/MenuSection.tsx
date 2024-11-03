import React from 'react';
import { Plus } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: { id: number; name: string; price: number }) => void;
}

const menuItems = [
  {
    id: 1,
    name: 'Classic Cheeseburger',
    description: 'A juicy beef patty topped with melted cheese, fresh lettuce, tomato, and our special sauce.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Veggie Delight',
    description: 'A delicious veggie patty made from fresh vegetables and spices, topped with avocado and sprouts.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Spicy BBQ Burger',
    description: 'Grilled chicken breast with spicy BBQ sauce, jalapeños, and crispy onion rings.',
    price: 189,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80'
  }
];

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-bold text-red-600">₹{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition flex items-center justify-center gap-2"
                >
                  <Plus className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}