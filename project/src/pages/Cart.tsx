import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, getTotalItems, getTotalPrice, clearCart } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <ShoppingBag size={64} className="text-gray-300 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any jute bags to your cart yet.</p>
        <Link 
          to="/products" 
          className="bg-[#4CAF50] text-white px-6 py-3 rounded-md inline-flex items-center font-medium hover:bg-[#3d9c40] transition-colors"
        >
          Start Shopping
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart ({getTotalItems()} items)</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
              <div className="p-6">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
                
                <div className="mt-6 flex justify-between">
                  <button 
                    onClick={clearCart}
                    className="text-[#E53935] hover:text-red-700 font-medium"
                  >
                    Clear Cart
                  </button>
                  <Link 
                    to="/products" 
                    className="text-[#4CAF50] hover:text-green-700 font-medium"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">₹50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">₹{Math.round(getTotalPrice() * 0.05)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{getTotalPrice() + 50 + Math.round(getTotalPrice() * 0.05)}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-[#8B4513] hover:bg-[#6d3611] text-white py-3 rounded-md transition-colors font-medium">
                Proceed to Checkout
              </button>
              
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">We accept:</p>
                <div className="flex space-x-2">
                  <div className="bg-white border border-gray-200 rounded px-2 py-1 text-xs">UPI</div>
                  <div className="bg-white border border-gray-200 rounded px-2 py-1 text-xs">Card</div>
                  <div className="bg-white border border-gray-200 rounded px-2 py-1 text-xs">Netbanking</div>
                  <div className="bg-white border border-gray-200 rounded px-2 py-1 text-xs">COD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;