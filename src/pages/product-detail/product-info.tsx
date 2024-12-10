import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Product } from '@/lib/types';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-bold mt-2">{product.price}€</p>
      </div>

      <Card className="p-4">
        <h2 className="font-semibold mb-2">Estado del Producto</h2>
        <p className="text-muted-foreground">{product.condition}</p>
      </Card>

      <div>
        <h2 className="font-semibold mb-2">Descripción</h2>
        <p className="text-muted-foreground">{product.description}</p>
      </div>

      <Button className="w-full" size="lg">
        <MessageCircle className="mr-2 h-4 w-4" />
        Contactar al Vendedor
      </Button>
    </div>
  );
}