import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#8B4513]/10 to-[#D2B48C]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 lg:py-24 flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quality Jute Bags for 
              <span className="text-[#E53935] block">PDS Storage Needs</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Durable, eco-friendly jute bags for all your storage requirements. 
              Track inventory and order directly from PDS shops nationwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products" 
                className="bg-[#4CAF50] text-white px-6 py-3 rounded-md flex items-center justify-center font-medium hover:bg-[#3d9c40] transition-colors"
              >
                Browse Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md flex items-center justify-center font-medium hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right image */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
              <img 
                src="https://images.pexels.com/photos/8469409/pexels-photo-8469409.jpeg"
                alt="Stack of jute bags" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-sm font-medium text-[#8B4513]">FEATURED</p>
                  <h3 className="text-lg font-semibold">Premium Storage Bags</h3>
                  <p className="text-sm text-gray-600">Heavy-duty, reliable, and perfect for bulk storage</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 bg-[#E53935] w-24 h-24 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 bg-[#4CAF50] w-32 h-32 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,75C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;