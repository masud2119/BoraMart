import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { products } from '../data/products';
import { Truck, Shield, Leaf } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const features = [
    {
      icon: <Truck className="text-[#4CAF50] w-6 h-6" />,
      title: 'Fast Delivery',
      description: 'Get your jute bags delivered directly from PDS shops to your doorstep.'
    },
    {
      icon: <Shield className="text-[#8B4513] w-6 h-6" />,
      title: 'Quality Assured',
      description: 'All our bags are inspected for quality and durability before shipping.'
    },
    {
      icon: <Leaf className="text-[#4CAF50] w-6 h-6" />,
      title: 'Eco-Friendly',
      description: 'Sustainable jute bags that help reduce plastic usage and environmental impact.'
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose BoraMart?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted marketplace for quality jute bags from PDS shops across India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#F5F5F5] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our selection of high-quality jute bags for all your grain storage needs.
            </p>
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-[#8B4513] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Start shopping for quality jute bags and support sustainable grain storage.
          </p>
          <button className="bg-white text-[#8B4513] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            View All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;