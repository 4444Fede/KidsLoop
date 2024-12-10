import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  condition: string;
  category: string;
  image: string;
  images?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}