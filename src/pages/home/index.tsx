import { Heart, Leaf, ShoppingBag, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from './product-card';
import { CategoryCard } from './category-card';
import { Footer } from './footer';
import { products, categories } from '@/lib/data';

interface HomeProps {
  onProductClick: (id: string) => void;
  onCreateClick: () => void;
}

export function Home({ onProductClick, onCreateClick }: HomeProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">KidsLoop</span>
            </div>
            <Button onClick={onCreateClick} variant="default">
              Vender Ropa
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            ¡Renueva la ropa de tus pequeños!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            De forma sostenible y económica, dando una segunda vida a la ropa infantil
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
              Explorar Ropa
            </Button>
            <Button size="lg" variant="outline" onClick={onCreateClick}>
              Vender
            </Button>
          </div>
          <div className="flex justify-center gap-8 pt-8">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <span>Calidad Garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span>Sostenible</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Comunidad Activa</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onProductClick(product.id)}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}