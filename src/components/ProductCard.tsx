import React, { useState } from 'react';
import { ShoppingBag, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductDetails from './ProductDetails';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [showDetails, setShowDetails] = useState(false);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    addToCart(product.id, product.name, product.price, selectedSize);
  };

  return (
    <>
      <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
        <div className="relative group">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-2">
              <button 
                onClick={handleAddToCart}
                className="bg-red-500 text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 font-bold hover:bg-red-600"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
              <button 
                onClick={() => setShowDetails(true)}
                className="bg-gray-800 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 font-bold hover:bg-gray-700"
              >
                <Info className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-black text-white mb-2">{product.name}</h3>
          <p className="text-gray-400 mb-4">{product.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-full text-sm font-bold transition-all duration-200 ${
                  selectedSize === size
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-red-500 text-xl font-black">₹{product.price}</span>
            <span className="text-xs text-gray-400">Free Shipping</span>
          </div>
        </div>
      </div>

      <ProductDetails 
        product={product}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

export default ProductCard;