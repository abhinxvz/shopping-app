import React, { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import Cart from './Cart';
import CreativeMenu from './Menu/CreativeMenu';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="bg-black border-b border-red-500 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="group"
              >
                <Menu className="h-6 w-6 text-red-500 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            
            <div className="relative group">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="h-6 w-6 text-red-500 cursor-pointer transform transition-transform group-hover:scale-110" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <CreativeMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default Navbar;