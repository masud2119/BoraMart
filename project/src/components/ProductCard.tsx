import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const getInventoryStatusClass = () => {
    if (product.inventory <= 5) return 'bg-red-100 text-red-800';
    if (product.inventory <= 15) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
              <Heart size={18} className="text-gray-500 hover:text-[#E53935]" />
            </button>
          </div>
          {product.inventory <= 5 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Low Stock
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
            <span className="font-bold text-[#4CAF50]">₹{product.price}</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <span className={`text-xs px-2 py-1 rounded-full ${getInventoryStatusClass()}`}>
                {product.inventory} in stock
              </span>
              <span className="text-xs text-gray-500 ml-2">{product.shopName}</span>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="p-2 rounded-full bg-[#8B4513] text-white hover:bg-[#6d3611] transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;