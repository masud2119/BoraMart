import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Standard Rice Jute Bag',
    description: 'Standard quality jute bag perfect for rice storage. Durable construction with reinforced stitching.',
    price: 250,
    inventory: 45,
    shopName: 'Central PDS Store',
    imageUrl: 'https://images.pexels.com/photos/8469409/pexels-photo-8469409.jpeg',
    weight: '50kg',
    type: 'Rice',
    category: 'Essential'
  },
  {
    id: '2',
    name: 'Heavy-Duty Wheat Bag',
    description: 'Extra strong jute bag designed for wheat storage. Double-stitched seams for maximum durability.',
    price: 230,
    inventory: 32,
    shopName: 'Eastern PDS Outlet',
    imageUrl: 'https://images.pexels.com/photos/8469375/pexels-photo-8469375.jpeg',
    weight: '75kg',
    type: 'Wheat',
    category: 'Essential'
  },
  {
    id: '3',
    name: 'Multi-Purpose Storage Bag',
    description: 'Versatile jute bag suitable for various grains. Features moisture-resistant treatment.',
    price: 280,
    inventory: 18,
    shopName: 'Western PDS Center',
    imageUrl: 'https://images.pexels.com/photos/8469382/pexels-photo-8469382.jpeg',
    weight: '40kg',
    type: 'Multi-purpose',
    category: 'Standard'
  },
  {
    id: '4',
    name: 'Premium Grade A Bag',
    description: 'Top-quality jute bag with extra thickness. Perfect for long-term storage needs.',
    price: 260,
    inventory: 25,
    shopName: 'Southern PDS Store',
    imageUrl: 'https://images.pexels.com/photos/8469397/pexels-photo-8469397.jpeg',
    weight: '50kg',
    type: 'Premium',
    category: 'Essential'
  },
  {
    id: '5',
    name: 'Industrial Storage Bag',
    description: 'Heavy-duty jute bag for industrial use. Reinforced bottom and sides for maximum strength.',
    price: 300,
    inventory: 12,
    shopName: 'Northern PDS Outlet',
    imageUrl: 'https://images.pexels.com/photos/8469409/pexels-photo-8469409.jpeg',
    weight: '100kg',
    type: 'Industrial',
    category: 'Premium'
  },
  {
    id: '6',
    name: 'Standard Storage Bag',
    description: 'Regular grade jute bag suitable for general storage needs. Cost-effective and reliable.',
    price: 270,
    inventory: 20,
    shopName: 'Central PDS Store',
    imageUrl: 'https://images.pexels.com/photos/8469375/pexels-photo-8469375.jpeg',
    weight: '50kg',
    type: 'Standard',
    category: 'Standard'
  }
];

export const categories = [
  'All',
  'Essential',
  'Standard',
  'Premium'
];