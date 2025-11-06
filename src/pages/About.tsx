import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">About Becky</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate baker, artist, and creator of edible masterpieces
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">
              The Story Behind Becky's Bakery
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Becky's passion for baking began in her grandmother's kitchen at the age of seven. What started as mixing bowls and flour-dusted aprons has blossomed into a thriving business that serves Witney and the surrounding areas with exceptional custom cakes.
              </p>
              
              <p>
                With over 15 years of professional experience, Becky has perfected her craft through countless hours of practice, experimentation, and dedication. She trained at the prestigious London School of Patisserie and has worked alongside some of the UK's most talented cake artists.
              </p>
              
              <p>
                What sets Becky's Bakery apart is the perfect marriage of artistry and flavor. Becky believes that a cake should be a feast for both the eyes and the palate. Every creation is made from scratch using premium ingredients, with attention to detail that transforms each cake into a work of edible art.
              </p>
              
              <p>
                Whether you're planning a wedding, celebrating a milestone birthday, or hosting a corporate event, Becky can create a custom cake that captures your vision perfectly. She specializes in wedding cakes, celebration cakes, and themed designs, and she's passionate about bringing her clients' dreams to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            Expertise & Specialties
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Wedding Cakes</h3>
              <p className="text-muted-foreground">
                Creating stunning centerpieces for your special day
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Custom Designs</h3>
              <p className="text-muted-foreground">
                Bringing your unique vision to life with artistry
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Events & Celebrations</h3>
              <p className="text-muted-foreground">
                Perfect cakes for birthdays, anniversaries, and more
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Dietary Options</h3>
              <p className="text-muted-foreground">
                Vegan, gluten-free, and allergen-friendly cakes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            Journey & Milestones
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
                  2008
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Started Becky's Bakery
                </h3>
                <p className="text-muted-foreground">
                  Opened the doors to the first Becky's Bakery shop in Witney, beginning a journey of sweet creations.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
                  2012
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Wedding Cake Specialist
                </h3>
                <p className="text-muted-foreground">
                  Became one of Oxfordshire's most sought-after wedding cake designers, creating over 50 wedding cakes per year.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
                  2018
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Custom Order Service
                </h3>
                <p className="text-muted-foreground">
                  Expanded to offer fully custom cake designs for all occasions, including themed and corporate events.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
                  2023
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  500+ Happy Clients
                </h3>
                <p className="text-muted-foreground">
                  Celebrated serving over 500 clients with custom cakes and maintaining a 5-star rating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Book a Consultation with Becky
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to bring your cake vision to life? Schedule a consultation to discuss your ideas, taste samples, and create something truly special.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
