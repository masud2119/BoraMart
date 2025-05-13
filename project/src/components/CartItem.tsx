import React from 'react';
import { CartItem as CartItemType } from '../types';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncrease = () => {
    if (quantity < product.inventory) {
      updateQuantity(product.id, quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.weight} | {product.shopName}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center border rounded-md">
            <button
              onClick={handleDecrease}
              className="p-1 text-gray-600 hover:text-[#E53935]"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="px-3 py-1 text-gray-800">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="p-1 text-gray-600 hover:text-[#4CAF50]"
              aria-label="Increase quantity"
              disabled={quantity >= product.inventory}
            >
              <Plus size={16} />
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium text-gray-800 mr-4">₹{product.price * quantity}</span>
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-gray-500 hover:text-[#E53935]"
              aria-label="Remove item"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;