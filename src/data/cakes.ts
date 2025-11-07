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
  // Wedding Cakes (5)
  {
    id: 'elegant-wedding-tier',
    title: 'Elegant Wedding Tier',
    category: 'Wedding',
    description: 'A luxurious 4-tier wedding cake with cascading roses and elegant draping',
    price: 'From KSh 45,000',
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
    price: 'From KSh 38,000',
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
    price: 'From KSh 32,000',
    image: '/src/assets/wedding-cake-3.jpg',
    imageAlt: 'Modern minimalist 2-tier wedding cake with geometric gold detailing and greenery',
    tags: ['modern', 'custom'],
    fullDescription: 'For the contemporary couple, this minimalist design features bold geometric gold patterns and fresh greenery. Clean lines and sophisticated styling make this perfect for modern weddings. Serves 40-60 guests.'
  },
  {
    id: 'rose-garden-wedding',
    title: 'Rose Garden Wedding',
    category: 'Wedding',
    description: 'Stunning 4-tier white cake with pink sugar roses and gold leaf accents',
    price: 'From KSh 48,000',
    image: '/src/assets/wedding-cake-4.jpg',
    imageAlt: 'Elegant 4-tier white wedding cake with soft pink sugar roses and delicate gold leaf',
    tags: ['premium', 'custom'],
    fullDescription: 'A breathtaking centerpiece featuring cascading soft pink sugar roses and delicate gold leaf details. Each tier is crafted with precision and elegance. Perfect for grand celebrations serving 90-130 guests.'
  },
  {
    id: 'ivory-elegance',
    title: 'Ivory Elegance',
    category: 'Wedding',
    description: 'Luxurious 3-tier ivory cake with gold geometric patterns and fresh flowers',
    price: 'From KSh 42,000',
    image: '/src/assets/wedding-cake-5.jpg',
    imageAlt: 'Luxurious 3-tier ivory wedding cake with gold geometric patterns and fresh white flowers',
    tags: ['premium', 'modern'],
    fullDescription: 'This sophisticated design combines ivory fondant with stunning gold geometric patterns and fresh white roses. A perfect balance of traditional elegance and contemporary style. Serves 70-90 guests.'
  },
  
  // Birthday Cakes (5)
  {
    id: 'rainbow-delight',
    title: 'Rainbow Delight',
    category: 'Birthday',
    description: 'Colorful 2-tier rainbow cake with smooth buttercream and gold sprinkles',
    price: 'From KSh 12,000',
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
    price: 'From KSh 9,500',
    image: '/src/assets/birthday-cake-2.jpg',
    imageAlt: 'Elegant chocolate birthday cake with fresh berries, macarons, and gold leaf',
    tags: ['chocolate', 'premium'],
    fullDescription: 'Indulge in rich chocolate layers adorned with fresh berries, delicate macarons, and edible gold leaf. This sophisticated birthday cake is perfect for adult celebrations. Serves 15-20 guests.'
  },
  {
    id: 'funfetti-celebration',
    title: 'Funfetti Celebration',
    category: 'Birthday',
    description: 'Fun white cake with rainbow sprinkles, buttercream swirls, and gold candles',
    price: 'From KSh 8,000',
    image: '/src/assets/birthday-cake-4.jpg',
    imageAlt: 'Colorful funfetti birthday cake with rainbow sprinkles and gold number candles',
    tags: ['colorful', 'buttercream'],
    fullDescription: 'A joyful celebration cake covered in colorful sprinkles with elegant buttercream swirls and gold number candles. Perfect for milestone birthdays and parties. Serves 12-18 guests.'
  },
  {
    id: 'red-velvet-elegance',
    title: 'Red Velvet Elegance',
    category: 'Birthday',
    description: 'Elegant red velvet layers with cream cheese frosting and fresh strawberries',
    price: 'From KSh 10,500',
    image: '/src/assets/birthday-cake-5.jpg',
    imageAlt: 'Elegant red velvet birthday cake with cream cheese frosting and fresh strawberries',
    tags: ['premium', 'elegant'],
    fullDescription: 'Layers of rich red velvet cake with silky cream cheese frosting, topped with fresh strawberries and edible gold flakes. A sophisticated choice for special celebrations. Serves 15-20 guests.'
  },
  {
    id: 'unicorn-magic',
    title: 'Unicorn Magic',
    category: 'Birthday',
    description: 'Whimsical unicorn cake with pastel buttercream and gold horn',
    price: 'From KSh 8,500',
    image: '/src/assets/birthday-cake-3.jpg',
    imageAlt: 'Whimsical unicorn birthday cake with pastel buttercream and gold horn',
    tags: ['kids', 'themed'],
    fullDescription: 'Create magical memories with this enchanting unicorn cake. Features soft pastel buttercream roses, a gleaming gold horn, and adorable details. Perfect for children\'s birthday parties. Serves 12-15 guests.'
  },

  // Kids Cakes (5)
  {
    id: 'dinosaur-adventure',
    title: 'Dinosaur Adventure',
    category: 'Celebration',
    description: 'Fun dinosaur-themed cake with colorful fondant decorations',
    price: 'From KSh 9,000',
    image: '/src/assets/kids-cake-1.jpg',
    imageAlt: 'Whimsical dinosaur themed kids birthday cake with green buttercream and toy dinosaurs',
    tags: ['kids', 'themed'],
    fullDescription: 'Perfect for little adventurers! Features friendly dinosaur characters, green buttercream, and colorful fondant details. Becky can customize with your child\'s favorite dinosaurs. Serves 15-20 guests.'
  },
  {
    id: 'princess-castle',
    title: 'Princess Castle',
    category: 'Celebration',
    description: 'Magical princess castle cake with pink towers and edible glitter',
    price: 'From KSh 11,000',
    image: '/src/assets/kids-cake-2.jpg',
    imageAlt: 'Colorful princess castle birthday cake with pink towers and edible glitter',
    tags: ['kids', 'themed'],
    fullDescription: 'Make dreams come true with this enchanting castle cake featuring pink towers, edible glitter, and fondant details. Perfect for princess-themed parties. Serves 18-24 guests.'
  },
  {
    id: 'superhero-adventure',
    title: 'Superhero Adventure',
    category: 'Celebration',
    description: 'Action-packed superhero cake with comic book style decorations',
    price: 'From KSh 9,500',
    image: '/src/assets/kids-cake-3.jpg',
    imageAlt: 'Superhero themed kids birthday cake with red and blue fondant and action figures',
    tags: ['kids', 'themed'],
    fullDescription: 'Perfect for young heroes! Features bold colors, comic book style decorations, and action figure toppers. Becky can customize with your child\'s favorite superhero. Serves 16-22 guests.'
  },
  {
    id: 'mermaid-ocean',
    title: 'Mermaid Ocean',
    category: 'Celebration',
    description: 'Magical mermaid cake with teal and purple ombre and seashells',
    price: 'From KSh 10,000',
    image: '/src/assets/kids-cake-4.jpg',
    imageAlt: 'Magical mermaid themed kids birthday cake with teal ombre and seashell decorations',
    tags: ['kids', 'themed'],
    fullDescription: 'Dive into an underwater adventure with this beautiful mermaid cake featuring teal and purple ombre buttercream, seashell decorations, and edible pearls. Serves 16-20 guests.'
  },
  {
    id: 'rainbow-unicorn-kids',
    title: 'Rainbow Unicorn Dreams',
    category: 'Celebration',
    description: 'Colorful unicorn cake perfect for magical celebrations',
    price: 'From KSh 8,500',
    image: '/src/assets/birthday-cake-3.jpg',
    imageAlt: 'Whimsical unicorn birthday cake with pastel buttercream and gold horn',
    tags: ['kids', 'themed'],
    fullDescription: 'Create magical memories with this enchanting unicorn cake. Features soft pastel buttercream roses, a gleaming gold horn, and adorable details. Perfect for children\'s birthday parties. Serves 12-15 guests.'
  },

  // Celebration & Custom Cakes (5)
  {
    id: 'watercolor-celebration',
    title: 'Watercolor Celebration',
    category: 'Celebration',
    description: 'Artistic cake with watercolor buttercream effect in pink and gold',
    price: 'From KSh 11,000',
    image: '/src/assets/custom-cake-1.jpg',
    imageAlt: 'Artistic celebration cake with watercolor buttercream in pink and gold with fresh flowers',
    tags: ['artistic', 'custom'],
    fullDescription: 'This artistic masterpiece features a stunning watercolor buttercream effect in pink and gold tones, adorned with fresh flowers. Becky can customize colors to match any celebration theme. Serves 15-20 guests.'
  },
  {
    id: 'graduation-success',
    title: 'Graduation Success',
    category: 'Celebration',
    description: 'Elegant graduation cake with black and gold fondant and cap topper',
    price: 'From KSh 10,500',
    image: '/src/assets/celebration-cake-1.jpg',
    imageAlt: 'Elegant graduation celebration cake with black and gold fondant and graduation cap',
    tags: ['graduation', 'custom'],
    fullDescription: 'Celebrate academic achievement with this elegant graduation cake featuring black and gold fondant, graduation cap topper, and congratulations message. Perfect for graduation parties. Serves 20-25 guests.'
  },
  {
    id: 'corporate-anniversary',
    title: 'Corporate Anniversary',
    category: 'Custom',
    description: 'Professional anniversary cake with white fondant and gold ribbon',
    price: 'From KSh 12,000',
    image: '/src/assets/celebration-cake-2.jpg',
    imageAlt: 'Corporate anniversary celebration cake with elegant white fondant and gold ribbon',
    tags: ['corporate', 'premium'],
    fullDescription: 'Perfect for corporate events and business milestones. Features elegant white fondant with gold ribbon accents. Becky can incorporate your company logo and brand colors. Serves 25-30 guests.'
  },
  {
    id: 'baby-shower-joy',
    title: 'Baby Shower Joy',
    category: 'Celebration',
    description: 'Sweet baby shower cake with pastel buttercream and teddy bears',
    price: 'From KSh 9,500',
    image: '/src/assets/celebration-cake-3.jpg',
    imageAlt: 'Baby shower celebration cake with pastel pink and blue buttercream and teddy bears',
    tags: ['baby shower', 'custom'],
    fullDescription: 'Welcome the new arrival with this adorable baby shower cake featuring soft pastel buttercream, baby booties, and teddy bear decorations. Available in pink, blue, or neutral colors. Serves 18-22 guests.'
  },
  {
    id: 'tropical-paradise',
    title: 'Tropical Paradise',
    category: 'Custom',
    description: 'Vibrant tropical cake with hibiscus flowers and palm leaves',
    price: 'From KSh 13,000',
    image: '/src/assets/custom-cake-3.jpg',
    imageAlt: 'Tropical themed celebration cake with vibrant hibiscus flowers and palm leaves',
    tags: ['tropical', 'custom'],
    fullDescription: 'Bring tropical vibes to your celebration with this stunning cake featuring vibrant hibiscus flowers, palm leaves, and colorful fruit decorations. Perfect for summer parties and destination-themed events. Serves 20-25 guests.'
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
