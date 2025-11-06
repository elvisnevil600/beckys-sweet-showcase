import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { cakes, testimonials } from '@/data/cakes';
import heroCake from '@/assets/hero-cake.jpg';

const Home = () => {
  const featuredCakes = cakes.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroCake}
            alt="Elegant 3-tier wedding cake with soft pink sugar flowers and gold accents"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              Exquisite Cakes for Every Occasion
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Becky creates stunning custom cakes that taste as beautiful as they look. From weddings to birthdays, every cake is a masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/contact">Order Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Featured Creations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of Becky's most loved designs. Each cake is handcrafted with care and can be customized to your vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredCakes.map((cake) => (
              <ProductCard key={cake.id} cake={cake} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/cakes">View All Cakes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Meet Becky
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                With over 15 years of experience, Becky has mastered the art of creating beautiful, delicious cakes. Her passion for baking started in childhood and has evolved into a thriving business serving Witney and surrounding areas.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're celebrating a wedding, birthday, or any special occasion, Becky can create a custom cake that exceeds your expectations. Every design is unique and tailored to your vision.
              </p>
              <Button asChild size="lg">
                <Link to="/about">Learn More About Becky</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/30 p-8 rounded-lg text-center">
                <p className="text-4xl font-serif font-bold text-primary mb-2">15+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-secondary/30 p-8 rounded-lg text-center">
                <p className="text-4xl font-serif font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-secondary/30 p-8 rounded-lg text-center">
                <p className="text-4xl font-serif font-bold text-primary mb-2">100%</p>
                <p className="text-muted-foreground">Custom Designs</p>
              </div>
              <div className="bg-secondary/30 p-8 rounded-lg text-center">
                <p className="text-4xl font-serif font-bold text-primary mb-2">5★</p>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - here's what our happy customers have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card p-8 rounded-lg border border-border"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Order Your Dream Cake?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Becky today to discuss your vision. Whether it's a grand wedding cake or an intimate birthday celebration, she'll bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
