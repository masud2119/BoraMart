export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  inventory: number;
  shopName: string;
  imageUrl: string;
  weight: string;
  type: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}