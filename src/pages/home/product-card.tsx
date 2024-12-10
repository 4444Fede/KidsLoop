import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardContent className="p-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </CardContent>
      <CardFooter className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.condition}</p>
          <p className="text-lg font-bold">{product.price}€</p>
        </div>
      </CardFooter>
    </Card>
  );
}