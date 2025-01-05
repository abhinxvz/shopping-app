import React from 'react';
import { Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Zap className="text-red-500 w-12 h-12" />
        </div>
        <h2 className="text-4xl font-black text-white mb-6">ABOUT ALTAIRA</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          At Altaira, we believe in authenticity over conformity. Our collections are for the dreamers, the doers, and the rule-breakers who refuse to fit into a box.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {['OVERSIZED FITS', '© 2025, ALTAIRA®', 'CHAOTIC ENERGY'].map((feature) => (
            <div key={feature} className="bg-black p-6 rounded-lg">
              <h3 className="text-red-500 font-black mb-2">{feature}</h3>
              <div className="w-12 h-1 bg-red-500 mx-auto mb-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;