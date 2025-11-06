export interface Cake {
  id: string;
  title: string;
  category: 'Wedding' | 'Birthday' | 'Celebration' | 'Custom';
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  hoverImage?: string;
  tags: string[];
  fullDescription?: string;
}

export const cakes: Cake[] = [
  {
    id: 'elegant-wedding-tier',
    title: 'Elegant Wedding Tier',
    category: 'Wedding',
    description: 'A luxurious 4-tier wedding cake with cascading roses and elegant draping',
    price: 'From £450',
    image: '/src/assets/wedding-cake-1.jpg',
    imageAlt: 'Luxurious 4-tier white wedding cake with cascading fresh roses and gold details',
    tags: ['custom', 'premium'],
    fullDescription: 'This stunning 4-tier wedding cake features hand-crafted sugar roses, elegant fondant draping, and delicate gold accents. Becky can customize the flavors and design to match your wedding theme perfectly. Perfect for weddings of 80-120 guests.'
  },
  {
    id: 'blush-romance',
    title: 'Blush Romance',
    category: 'Wedding',
    description: 'Romantic 3-tier blush pink cake with white buttercream flowers',
    price: 'From £380',
    image: '/src/assets/wedding-cake-2.jpg',
    imageAlt: 'Romantic 3-tier blush pink wedding cake with white buttercream flowers and gold ribbon',
    tags: ['buttercream', 'custom'],
    fullDescription: 'A beautiful blush pink creation featuring delicate white buttercream flowers and soft gold ribbon details. This elegant design combines modern aesthetics with timeless romance. Serves 60-80 guests.'
  },
  {
    id: 'modern-geometric',
    title: 'Modern Geometric',
    category: 'Wedding',
    description: 'Contemporary 2-tier cake with bold geometric gold detailing',
    price: 'From £320',
    image: '/src/assets/wedding-cake-3.jpg',
    imageAlt: 'Modern minimalist 2-tier wedding cake with geometric gold detailing and greenery',
    tags: ['modern', 'custom'],
    fullDescription: 'For the contemporary couple, this minimalist design features bold geometric gold patterns and fresh greenery. Clean lines and sophisticated styling make this perfect for modern weddings. Serves 40-60 guests.'
  },
  {
    id: 'rainbow-delight',
    title: 'Rainbow Delight',
    category: 'Birthday',
    description: 'Colorful 2-tier rainbow cake with smooth buttercream and gold sprinkles',
    price: 'From £120',
    image: '/src/assets/birthday-cake-1.jpg',
    imageAlt: 'Colorful 2-tier rainbow birthday cake with pastel layers and gold sprinkles',
    tags: ['buttercream', 'colorful'],
    fullDescription: 'Bring joy to any celebration with this vibrant rainbow cake. Featuring smooth buttercream frosting, pastel rainbow layers, and elegant gold sprinkles. Perfect for birthdays and celebrations. Serves 20-25 guests.'
  },
  {
    id: 'chocolate-berry',
    title: 'Chocolate Berry Indulgence',
    category: 'Birthday',
    description: 'Decadent chocolate cake topped with fresh berries and macarons',
    price: 'From £95',
    image: '/src/assets/birthday-cake-2.jpg',
    imageAlt: 'Elegant chocolate birthday cake with fresh berries, macarons, and gold leaf',
    tags: ['chocolate', 'premium'],
    fullDescription: 'Indulge in rich chocolate layers adorned with fresh berries, delicate macarons, and edible gold leaf. This sophisticated birthday cake is perfect for adult celebrations. Serves 15-20 guests.'
  },
  {
    id: 'unicorn-magic',
    title: 'Unicorn Magic',
    category: 'Birthday',
    description: 'Whimsical unicorn cake with pastel buttercream and gold horn',
    price: 'From £85',
    image: '/src/assets/birthday-cake-3.jpg',
    imageAlt: 'Whimsical unicorn birthday cake with pastel buttercream and gold horn',
    tags: ['kids', 'themed'],
    fullDescription: 'Create magical memories with this enchanting unicorn cake. Features soft pastel buttercream roses, a gleaming gold horn, and adorable details. Perfect for children\'s birthday parties. Serves 12-15 guests.'
  },
  {
    id: 'watercolor-celebration',
    title: 'Watercolor Celebration',
    category: 'Celebration',
    description: 'Artistic cake with watercolor buttercream effect in pink and gold',
    price: 'From £110',
    image: '/src/assets/custom-cake-1.jpg',
    imageAlt: 'Artistic celebration cake with watercolor buttercream in pink and gold with fresh flowers',
    tags: ['artistic', 'custom'],
    fullDescription: 'This artistic masterpiece features a stunning watercolor buttercream effect in pink and gold tones, adorned with fresh flowers. Becky can customize colors to match any celebration theme. Serves 15-20 guests.'
  },
  {
    id: 'marbled-elegance',
    title: 'Marbled Elegance',
    category: 'Custom',
    description: 'Sophisticated cake with marbled fondant and gold geometric patterns',
    price: 'From £130',
    image: '/src/assets/custom-cake-2.jpg',
    imageAlt: 'Sophisticated corporate cake with marbled fondant and gold geometric patterns',
    tags: ['premium', 'corporate'],
    fullDescription: 'Perfect for corporate events and sophisticated celebrations. Features elegant marbled fondant with gold geometric detailing and fresh floral accents. Becky can incorporate your brand colors or event theme. Serves 18-22 guests.'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    rating: 5,
    text: 'Becky created the most stunning wedding cake for us. It was exactly what we envisioned and tasted absolutely divine. All our guests were raving about it!'
  },
  {
    id: 2,
    name: 'James Thompson',
    rating: 5,
    text: 'Ordered a birthday cake for my daughter and it exceeded all expectations. The unicorn design was perfect and the cake itself was delicious. Highly recommend!'
  },
  {
    id: 3,
    name: 'Emily Roberts',
    rating: 5,
    text: 'Becky is incredibly talented. She made a custom cake for our corporate event that was both beautiful and professional. The attention to detail was remarkable.'
  }
];
