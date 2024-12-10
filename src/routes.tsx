import { useState } from 'react';
import { Home } from '@/pages/home';
import { ProductDetail } from '@/pages/product-detail';
import { CreateListing } from '@/pages/create-listing';

export function Routes() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onProductClick={(id) => {
          setSelectedProduct(id);
          setCurrentPage('product');
        }} onCreateClick={() => setCurrentPage('create')} />;
      case 'product':
        return <ProductDetail 
          productId={selectedProduct!} 
          onBackClick={() => setCurrentPage('home')}
          onRelatedClick={(id) => setSelectedProduct(id)}
        />;
      case 'create':
        return <CreateListing onBackClick={() => setCurrentPage('home')} />;
      default:
        return <Home onProductClick={(id) => {
          setSelectedProduct(id);
          setCurrentPage('product');
        }} onCreateClick={() => setCurrentPage('create')} />;
    }
  };

  return renderPage();
}