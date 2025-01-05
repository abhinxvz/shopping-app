import React from 'react';
import { Sparkles } from 'lucide-react';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import About from './components/About';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black text-white">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <Navbar />
        
        <main>
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-7xl font-black mb-4 text-red-500 animate-pulse tracking-wider">
                ALTAIRA
                <Sparkles className="inline-block ml-2" />
              </h1>
              <p className="text-xl text-gray-400">DRIP SO HIGH , IT’S IN ORBIT
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <About />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;