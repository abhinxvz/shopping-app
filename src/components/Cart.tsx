import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, cartTotal } = useCart();

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
      onClick={handleOverlayClick}
    >
      <div className="absolute right-0 top-0 h-full w-96 bg-gray-900 p-6 shadow-lg transform transition-transform duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Your Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="text-red-500 hover:text-red-400" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-400">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                  <div>
                    <h3 className="text-white font-bold">{item.name}</h3>
                    <p className="text-gray-400">Size: {item.size}</p>
                    <p className="text-red-500">₹{item.price} × {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X size={20} className="text-red-500 hover:text-red-400" />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-bold">Total:</span>
                <span className="text-red-500 font-bold">₹{cartTotal}</span>
              </div>
              <button className="w-full bg-red-500 text-white py-3 rounded-full font-bold hover:bg-red-600 transition-colors">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;