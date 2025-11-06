import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Cake } from '@/data/cakes';

interface ProductCardProps {
  cake: Cake;
}

const ProductCard = ({ cake }: ProductCardProps) => {
  return (
    <Link to={`/cakes/${cake.id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={cake.image}
            alt={cake.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {cake.category}
            </Badge>
          </div>
          <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
            {cake.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {cake.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-primary">
              {cake.price}
            </p>
            <div className="flex gap-1">
              {cake.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
