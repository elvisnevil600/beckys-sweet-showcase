import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import beckyPortrait from '@/assets/becky-portrait.jpg';

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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={beckyPortrait}
                alt="Becky holding a beautiful decorated cake in her bakery kitchen"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                The Story Behind Becky's Bakery
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Becky's passion for baking began in her grandmother's kitchen at the age of seven. What started as mixing bowls and flour-dusted aprons has blossomed into a thriving business that serves Bondo, Siaya County, and surrounding areas with exceptional custom cakes.
                </p>
                
                <p>
                  With over 10 years of professional experience, Becky has perfected her craft through countless hours of practice, experimentation, and dedication. She believes that every cake should tell a story and create lasting memories for her clients.
                </p>
                
                <p>
                  What sets Becky's Bakery apart is the perfect marriage of artistry and flavor. Becky believes that a cake should be a feast for both the eyes and the palate. Every creation is made from scratch using premium ingredients, with attention to detail that transforms each cake into a work of edible art.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Whether you're planning a wedding, celebrating a milestone birthday, or hosting a corporate event, Becky can create a custom cake that captures your vision perfectly. She specializes in wedding cakes, celebration cakes, and themed designs, and she's passionate about bringing her clients' dreams to life.
              </p>
              
              <p>
                From elegant multi-tier wedding cakes to whimsical children's birthday creations, Becky works closely with each client to understand their needs and exceed their expectations. Her commitment to quality and personalized service has made Becky's Bakery a trusted name in Bondo and beyond.
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
                  2014
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Started Becky's Bakery
                </h3>
                <p className="text-muted-foreground">
                  Opened the doors to Becky's Bakery in Bondo, beginning a journey of sweet creations and bringing joy to the community.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
                  2017
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Wedding Cake Specialist
                </h3>
                <p className="text-muted-foreground">
                  Became one of Siaya County's most sought-after wedding cake designers, creating stunning centerpieces for couples' special days.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
                  2020
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Custom Order Service
                </h3>
                <p className="text-muted-foreground">
                  Expanded to offer fully custom cake designs for all occasions, including themed children's parties and corporate events.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
                  2025
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  500+ Happy Clients
                </h3>
                <p className="text-muted-foreground">
                  Celebrated serving over 500 clients with custom cakes and maintaining a 5-star reputation throughout Siaya County.
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
