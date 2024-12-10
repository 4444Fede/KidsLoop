import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/lib/types';

export function CategoryCard({ name, icon: Icon, description }: Category) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-6 text-center space-y-4">
        <Icon className="w-12 h-12 mx-auto text-primary" />
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}