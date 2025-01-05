import React, { useState } from 'react';
import { X, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductDetailsProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  selectedSize: string;
  onSizeChange: (size: string) => void;
  onAddToCart: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  isOpen,
  onClose,
  selectedSize,
  onSizeChange,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState('details');
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizeGuide = {
    XS: { chest: "34-36", length: "26" },
    S: { chest: "36-38", length: "27" },
    M: { chest: "38-40", length: "28" },
    L: { chest: "40-42", length: "29" },
    XL: { chest: "42-44", length: "30" },
    XXL: { chest: "44-46", length: "31" },
  };

  const tabs = [
    { id: 'details', label: 'Details' },
    { id: 'sizing', label: 'Size Guide' },
    { id: 'care', label: 'Care' },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-900 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-2xl font-black text-white">{product.name}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="text-red-500 hover:text-red-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full rounded-lg"
            />
            <div className="flex justify-between items-center">
              <span className="text-red-500 text-2xl font-black">₹{product.price}</span>
              <button
                onClick={() => {
                  onAddToCart();
                  onClose();
                }}
                className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex space-x-4 border-b border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 font-bold transition-colors ${
                    activeTab === tab.id
                      ? 'text-red-500 border-b-2 border-red-500'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {activeTab === 'details' && (
                <div className="text-gray-400 space-y-4">
                  <p>{product.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>100% Premium Cotton</li>
                    <li>Oversized Fit</li>
                    <li>Digital Print</li>
                    <li>Pre-shrunk fabric</li>
                  </ul>
                </div>
              )}

              {activeTab === 'sizing' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => onSizeChange(size)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                          selectedSize === size
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-400 border-b border-gray-800">
                        <th className="py-2 text-left">Size</th>
                        <th className="py-2 text-left">Chest (inches)</th>
                        <th className="py-2 text-left">Length (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(sizeGuide).map(([size, measurements]) => (
                        <tr key={size} className="text-gray-400 border-b border-gray-800">
                          <td className="py-2">{size}</td>
                          <td className="py-2">{measurements.chest}"</td>
                          <td className="py-2">{measurements.length}"</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'care' && (
                <div className="text-gray-400 space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Machine wash cold</li>
                    <li>Wash inside out</li>
                    <li>Do not bleach</li>
                    <li>Tumble dry low</li>
                    <li>Iron on low heat if needed</li>
                    <li>Do not dry clean</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;