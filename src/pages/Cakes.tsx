import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { cakes } from '@/data/cakes';

const Cakes = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Wedding', 'Birthday', 'Celebration', 'Custom'];

  const filteredCakes =
    selectedCategory === 'All'
      ? cakes
      : cakes.filter((cake) => cake.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-4 text-center">
            Our Cakes
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Browse Becky's collection of exquisite cakes. Each design can be fully customized to match your vision and occasion.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCakes.map((cake) => (
              <ProductCard key={cake.id} cake={cake} />
            ))}
          </div>

          {filteredCakes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No cakes found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cakes;
