import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ListingForm } from './listing-form';
import { Footer } from '@/pages/home/footer';

interface CreateListingProps {
  onBackClick: () => void;
}

export function CreateListing({ onBackClick }: CreateListingProps) {
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Publicar Producto</h1>
          <ListingForm onSubmit={() => onBackClick()} />
        </div>
      </main>

      <Footer />
    </div>
  );
}