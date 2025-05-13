import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ShoppingBag, Heart, Truck, Shield, ChevronLeft, Minus, Plus } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  
  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);
  
  if (!product) {
    return null;
  }
  
  const handleIncrease = () => {
    if (quantity < product.inventory) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const getInventoryStatusClass = () => {
    if (product.inventory <= 5) return 'bg-red-100 text-red-800';
    if (product.inventory <= 15) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft size={20} />
          <span>Back to products</span>
        </button>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product image */}
          <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto object-cover rounded-lg shadow-md transition-transform hover:scale-105"
              />
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <Heart size={20} className="text-gray-500 hover:text-[#E53935]" />
              </button>
            </div>
          </div>
          
          {/* Product info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-xl font-bold text-[#4CAF50] mb-4">₹{product.price}</p>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-100 rounded-md px-4 py-2">
                <span className="text-sm text-gray-500">Weight</span>
                <p className="font-medium">{product.weight}</p>
              </div>
              <div className="bg-gray-100 rounded-md px-4 py-2">
                <span className="text-sm text-gray-500">Type</span>
                <p className="font-medium">{product.type}</p>
              </div>
              <div className="bg-gray-100 rounded-md px-4 py-2">
                <span className="text-sm text-gray-500">Shop</span>
                <p className="font-medium">{product.shopName}</p>
              </div>
              <div className={`rounded-md px-4 py-2 ${getInventoryStatusClass()}`}>
                <span className="text-sm opacity-75">Availability</span>
                <p className="font-medium">{product.inventory} in stock</p>
              </div>
            </div>
            
            {/* Quantity selector and add to cart */}
            <div className="mb-8">
              <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Quantity</label>
              <div className="flex items-center">
                <button
                  onClick={handleDecrease}
                  className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max={product.inventory}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(product.inventory, Math.max(1, parseInt(e.target.value))))}
                  className="w-16 text-center border-y border-gray-300 p-2"
                />
                <button
                  onClick={handleIncrease}
                  className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
                  disabled={quantity >= product.inventory}
                >
                  <Plus size={16} />
                </button>
                
                <button
                  onClick={handleAddToCart}
                  className="ml-4 flex-1 bg-[#8B4513] hover:bg-[#6d3611] text-white py-2 px-6 rounded-md transition-colors flex items-center justify-center"
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
            
            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Truck size={20} className="text-[#4CAF50] mr-3 mt-0.5" />
                  <span>Free delivery on orders over ₹1000</span>
                </li>
                <li className="flex items-start">
                  <Shield size={20} className="text-[#8B4513] mr-3 mt-0.5" />
                  <span>Quality-checked by PDS standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;