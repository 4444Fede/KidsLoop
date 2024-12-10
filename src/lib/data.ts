import { Baby, User2, GraduationCap } from 'lucide-react';
import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Bebés 0-1 año',
    description: 'Ropa suave y cómoda para los más pequeños',
    icon: Baby,
  },
  {
    id: '2',
    name: 'Niños 2-5 años',
    description: 'Prendas resistentes para aventureros',
    icon: User2,
  },
  {
    id: '3',
    name: 'Niños 6-10 años',
    description: 'Ropa práctica para el colegio y más',
    icon: GraduationCap,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Conjunto de Verano 2 años',
    description: 'Precioso conjunto de algodón orgánico, perfecto para el verano.',
    price: 15,
    condition: 'Como nuevo',
    category: '2',
    image: 'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5',
    images: [
      'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5',
      'https://images.unsplash.com/photo-1519278404-f96544a7f4b0',
    ],
  },
  {
    id: '2',
    name: 'Vestido Flores 4 años',
    description: 'Vestido estampado de flores, ideal para ocasiones especiales.',
    price: 20,
    condition: 'Excelente estado',
    category: '2',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7',
  },
  {
    id: '3',
    name: 'Pack 3 Bodies Bebé',
    description: 'Pack de bodies de algodón para bebé, talla 6 meses.',
    price: 12,
    condition: 'Nuevo con etiquetas',
    category: '1',
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8',
  },
  {
    id: '4',
    name: 'Abrigo Invierno 8 años',
    description: 'Abrigo acolchado muy calentito, perfecto para el invierno.',
    price: 25,
    condition: 'Buen estado',
    category: '3',
    image: 'https://images.unsplash.com/photo-1545048702-79362596cdc9',
  },
];