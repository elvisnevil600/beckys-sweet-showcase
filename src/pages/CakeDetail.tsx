import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { cakes } from '@/data/cakes';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const CakeDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const cake = cakes.find((c) => c.id === id);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    cakeStyle: cake?.title || '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your inquiry. Becky will contact you soon.",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventDate: '',
      cakeStyle: cake?.title || '',
      message: '',
    });
  };

  if (!cake) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Cake Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The cake you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/cakes">Browse All Cakes</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/cakes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Cakes
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden mb-4">
              <img
                src={cake.image}
                alt={cake.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {cake.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <Badge className="mb-4">{cake.category}</Badge>
            <h1 className="text-4xl font-serif font-bold mb-4">{cake.title}</h1>
            <p className="text-3xl font-bold text-primary mb-6">{cake.price}</p>
            <p className="text-lg text-muted-foreground mb-8">
              {cake.fullDescription || cake.description}
            </p>

            {/* Inquiry Form */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Order or Inquire About This Cake
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="eventDate">Event Date *</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDate: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="cakeStyle">Cake Style</Label>
                  <Input
                    id="cakeStyle"
                    value={formData.cakeStyle}
                    onChange={(e) =>
                      setFormData({ ...formData, cakeStyle: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell Becky about your vision, dietary requirements, or any special requests..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CakeDetail;
