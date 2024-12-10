import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import { ImageCarousel } from './image-carousel';
import { ProductInfo } from './product-info';
import { Footer } from '@/pages/home/footer';

interface ProductDetailProps {
  productId: string;
  onBackClick: () => void;
  onRelatedClick: (id: string) => void;
}

export function ProductDetail({ productId, onBackClick }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBackClick}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">KidsLoop</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ImageCarousel images={product.images || [product.image]} />
          <ProductInfo product={product} />
        </div>
      </main>

      <Footer />
    </div>
  );
}