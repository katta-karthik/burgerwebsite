import React, { useState } from 'react';
import { Menu, User, ShoppingCart, Star, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Reservations from './components/Reservations';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ReviewModal from './components/ReviewModal';
import CartSidebar from './components/CartSidebar';

interface Review {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  date: string;
}

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ email: '', name: 'Demo User' });
  const [cartItems, setCartItems] = useState<Array<{ id: number; name: string; price: number; quantity: number }>>([]);
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: 'John Doe',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
      text: 'The burgers at Berger Hut are simply amazing! The flavors are rich, and the ingredients are always fresh.',
      rating: 5,
      date: '2024-03-10'
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      text: 'Berger Hut never disappoints! The quality of their burgers and the friendly service make it a top-notch dining experience.',
      rating: 5,
      date: '2024-03-09'
    }
  ]);

  const handleLogin = (email: string, password: string) => {
    if (email === 'demo@example.com' && password === 'demo123') {
      setIsLoggedIn(true);
      setCurrentUser({ email, name: 'Demo User' });
      setIsAuthOpen(false);
    }
  };

  const handleAddToCart = (item: { id: number; name: string; price: number }) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleAddReview = (review: { rating: number; comment: string }) => {
    const newReview: Review = {
      id: reviews.length + 1,
      name: currentUser.name,
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
      text: review.comment,
      rating: review.rating,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews(prev => [newReview, ...prev]);
    setIsReviewOpen(false);
  };

  return (
    <div className="relative">
      <Navbar 
        onAuthClick={() => setIsAuthOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        isLoggedIn={isLoggedIn}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        userEmail={currentUser.email}
      />
      
      <main>
        <Hero />
        <About />
        <MenuSection onAddToCart={handleAddToCart} />
        <Reservations />
        <Testimonials 
          reviews={reviews}
          onReviewClick={() => isLoggedIn ? setIsReviewOpen(true) : setIsAuthOpen(true)} 
        />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      {isAuthOpen && (
        <AuthModal 
          onClose={() => setIsAuthOpen(false)}
          onLogin={handleLogin}
        />
      )}

      {isReviewOpen && (
        <ReviewModal 
          onClose={() => setIsReviewOpen(false)}
          onSubmit={handleAddReview}
        />
      )}

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={(id, quantity) => {
          setCartItems(prev => 
            prev.map(item => 
              item.id === id ? { ...item, quantity } : item
            ).filter(item => item.quantity > 0)
          );
        }}
      />
    </div>
  );
}

export default App;