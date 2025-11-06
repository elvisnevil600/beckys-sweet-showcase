import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cakes } from '@/data/cakes';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Wedding', 'Birthday', 'Celebration'];

  const filteredImages =
    selectedFilter === 'All'
      ? cakes
      : cakes.filter((cake) => cake.category === selectedFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-4 text-center">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Explore our collection of beautiful cake designs. Every cake tells a story and celebrates a special moment.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'outline'}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((cake, index) => (
              <div
                key={cake.id}
                className="break-inside-avoid group relative overflow-hidden rounded-lg"
              >
                <img
                  src={cake.image}
                  alt={cake.imageAlt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-serif font-semibold mb-1">
                      {cake.title}
                    </h3>
                    <p className="text-sm opacity-90">{cake.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No images found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
