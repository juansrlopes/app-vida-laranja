// Service categories
export type ServiceCategory =
  | 'all'
  | 'legal'
  | 'beauty'
  | 'fitness'
  | 'food'
  | 'realestate'
  | 'others';

// Service item interface
export interface ServiceItem {
  id: string;
  image: any;
  title: string;
  subtitle: string;
  category: ServiceCategory;
}

// Extended service interface for detailed views
export interface ServiceDetail extends ServiceItem {
  slug: string; // URL-friendly identifier
  description: string;
  location: string;
  contact: string;
  website?: string;
  price: string;
  rating: number;
  reviews: number;
  hours: string;
  services: string[];
  tags: string[];
}

// Mock services data
export const mockServices: ServiceDetail[] = [
  {
    id: '1',
    slug: 'legal-consultation',
    image: require('../images/services.jpg'),
    title: 'Legal Consultation',
    subtitle: 'Expert legal advice for your business needs',
    category: 'legal',
    description:
      'Professional legal consultation services for businesses and individuals. Our experienced lawyers provide comprehensive advice on corporate law, contracts, compliance, and legal strategy.',
    location: 'Herengracht 123, Amsterdam',
    contact: '+31 20 123 4567',
    website: 'www.legalconsult-amsterdam.nl',
    price: '€150 - €300 per hour',
    rating: 4.8,
    reviews: 127,
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    services: [
      'Corporate Law',
      'Contract Review',
      'Legal Strategy',
      'Compliance Advice',
    ],
    tags: ['Business Law', 'Experienced', 'Consultation', 'Professional'],
  },
  {
    id: '2',
    slug: 'immigration-law',
    image: require('../images/services.jpg'),
    title: 'Immigration Law',
    subtitle: 'Visa and residency permit assistance',
    category: 'legal',
    description:
      'Specialized immigration law services helping individuals and families navigate Dutch immigration processes. We assist with visa applications, residency permits, and citizenship procedures.',
    location: 'Prinsengracht 456, Amsterdam',
    contact: '+31 20 987 6543',
    website: 'www.immigration-help.nl',
    price: '€200 - €500 per case',
    rating: 4.9,
    reviews: 89,
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM',
    services: [
      'Visa Applications',
      'Residency Permits',
      'Citizenship Process',
      'Family Reunification',
    ],
    tags: ['Immigration', 'Visa Help', 'Residency', 'Expert Guidance'],
  },
  {
    id: '3',
    slug: 'hair-beauty-salon',
    image: require('../images/services.jpg'),
    title: 'Hair & Beauty Salon',
    subtitle: 'Professional styling and beauty treatments',
    category: 'beauty',
    description:
      'Full-service hair and beauty salon offering cutting-edge styling, coloring, and beauty treatments. Our skilled stylists use premium products to help you look and feel your best.',
    location: 'Jordaan District, Amsterdam',
    contact: '+31 20 555 0123',
    price: '€35 - €150 per service',
    rating: 4.7,
    reviews: 203,
    hours: 'Tue-Sat: 9:00 AM - 7:00 PM',
    services: ['Hair Cutting', 'Hair Coloring', 'Styling', 'Beauty Treatments'],
    tags: ['Hair Salon', 'Beauty', 'Professional', 'Premium Products'],
  },
  {
    id: '4',
    slug: 'spa-wellness',
    image: require('../images/services.jpg'),
    title: 'Spa & Wellness',
    subtitle: 'Relaxing treatments and massage therapy',
    category: 'beauty',
    description:
      'Luxury spa offering a wide range of wellness treatments including massage therapy, facials, and body treatments. Escape the city stress in our tranquil environment.',
    location: 'Vondelpark Area, Amsterdam',
    contact: '+31 20 444 5678',
    website: 'www.wellness-spa-amsterdam.com',
    price: '€60 - €200 per treatment',
    rating: 4.6,
    reviews: 156,
    hours: 'Daily: 10:00 AM - 9:00 PM',
    services: [
      'Massage Therapy',
      'Facials',
      'Body Treatments',
      'Wellness Packages',
    ],
    tags: ['Spa', 'Wellness', 'Relaxation', 'Luxury'],
  },
  {
    id: '5',
    slug: 'personal-training',
    image: require('../images/services.jpg'),
    title: 'Personal Training',
    subtitle: 'One-on-one fitness coaching',
    category: 'fitness',
    description:
      "Certified personal trainers providing customized fitness programs tailored to your goals. Whether you want to lose weight, build muscle, or improve overall fitness, we're here to help.",
    location: 'Multiple locations in Amsterdam',
    contact: '+31 20 333 7890',
    website: 'www.personaltrainer-amsterdam.nl',
    price: '€50 - €80 per session',
    rating: 4.8,
    reviews: 94,
    hours: 'Mon-Sun: 6:00 AM - 10:00 PM',
    services: [
      'Personal Training',
      'Fitness Assessment',
      'Nutrition Guidance',
      'Goal Setting',
    ],
    tags: ['Personal Training', 'Fitness', 'Certified', 'Custom Programs'],
  },
  {
    id: '6',
    slug: 'yoga-studio',
    image: require('../images/services.jpg'),
    title: 'Yoga Studio',
    subtitle: 'Classes for all levels and styles',
    category: 'fitness',
    description:
      'Modern yoga studio offering various styles of yoga classes for all levels. From gentle Hatha to dynamic Vinyasa, find your perfect practice in our welcoming community.',
    location: 'De Pijp, Amsterdam',
    contact: '+31 20 222 3456',
    website: 'www.yogastudio-amsterdam.com',
    price: '€20 - €25 per class',
    rating: 4.7,
    reviews: 178,
    hours: 'Mon-Sun: 7:00 AM - 9:00 PM',
    services: ['Hatha Yoga', 'Vinyasa Flow', 'Yin Yoga', 'Meditation Classes'],
    tags: ['Yoga', 'All Levels', 'Community', 'Mindfulness'],
  },
  {
    id: '7',
    slug: 'catering-services',
    image: require('../images/services.jpg'),
    title: 'Catering Services',
    subtitle: 'Professional catering for events',
    category: 'food',
    description:
      'Professional catering services for corporate events, weddings, and private parties. We offer diverse menus featuring local and international cuisine, customized to your preferences.',
    location: 'Amsterdam Noord',
    contact: '+31 20 111 2345',
    website: 'www.catering-amsterdam.nl',
    price: '€25 - €75 per person',
    rating: 4.9,
    reviews: 67,
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    services: [
      'Event Catering',
      'Corporate Lunches',
      'Wedding Catering',
      'Custom Menus',
    ],
    tags: ['Catering', 'Events', 'Professional', 'Custom Menus'],
  },
  {
    id: '8',
    slug: 'private-chef',
    image: require('../images/services.jpg'),
    title: 'Private Chef',
    subtitle: 'Personal cooking services at home',
    category: 'food',
    description:
      'Experienced private chef offering personalized cooking services in your home. Enjoy restaurant-quality meals prepared with fresh, local ingredients tailored to your dietary preferences.',
    location: 'Service throughout Amsterdam',
    contact: '+31 20 666 7890',
    price: '€80 - €150 per meal',
    rating: 4.8,
    reviews: 45,
    hours: 'By appointment',
    services: [
      'Private Dining',
      'Meal Preparation',
      'Special Diets',
      'Cooking Lessons',
    ],
    tags: ['Private Chef', 'Home Service', 'Fresh Ingredients', 'Custom Meals'],
  },
  {
    id: '9',
    slug: 'property-management',
    image: require('../images/services.jpg'),
    title: 'Property Management',
    subtitle: 'Complete real estate management services',
    category: 'realestate',
    description:
      'Comprehensive property management services for residential and commercial properties. We handle everything from tenant relations to maintenance, ensuring your investment is well-managed.',
    location: 'Zuidas Business District',
    contact: '+31 20 777 8901',
    website: 'www.property-management-amsterdam.com',
    price: '5-8% of rental income',
    rating: 4.5,
    reviews: 112,
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    services: [
      'Tenant Management',
      'Property Maintenance',
      'Rent Collection',
      'Legal Support',
    ],
    tags: ['Property Management', 'Investment', 'Professional', 'Full Service'],
  },
  {
    id: '10',
    slug: 'real-estate-agent',
    image: require('../images/services.jpg'),
    title: 'Real Estate Agent',
    subtitle: 'Buy, sell, or rent properties in Amsterdam',
    category: 'realestate',
    description:
      "Experienced real estate agent specializing in Amsterdam properties. Whether you're buying your first home, selling, or looking for rental properties, we provide expert guidance throughout the process.",
    location: 'Central Amsterdam Office',
    contact: '+31 20 888 9012',
    website: 'www.realestate-amsterdam.nl',
    price: 'Commission-based',
    rating: 4.6,
    reviews: 89,
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    services: [
      'Property Sales',
      'Property Rentals',
      'Market Analysis',
      'Negotiation',
    ],
    tags: [
      'Real Estate',
      'Amsterdam Expert',
      'Buy/Sell/Rent',
      'Market Knowledge',
    ],
  },
  {
    id: '11',
    slug: 'translation-services',
    image: require('../images/services.jpg'),
    title: 'Translation Services',
    subtitle: 'Professional document translation',
    category: 'others',
    description:
      'Certified translation services for legal, business, and personal documents. Our native speakers provide accurate translations between Dutch, English, and other major languages.',
    location: 'Amsterdam Centrum',
    contact: '+31 20 999 0123',
    website: 'www.translation-amsterdam.com',
    price: '€0.15 - €0.25 per word',
    rating: 4.9,
    reviews: 134,
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    services: [
      'Document Translation',
      'Certified Translation',
      'Business Translation',
      'Legal Translation',
    ],
    tags: ['Translation', 'Certified', 'Multiple Languages', 'Professional'],
  },
  {
    id: '12',
    slug: 'photography',
    image: require('../images/services.jpg'),
    title: 'Photography',
    subtitle: 'Event and portrait photography',
    category: 'others',
    description:
      'Professional photography services for events, portraits, and commercial projects. Capture your special moments with our creative and experienced photographers.',
    location: 'Studio in Amsterdam West',
    contact: '+31 20 123 4567',
    website: 'www.photography-amsterdam.nl',
    price: '€200 - €800 per session',
    rating: 4.7,
    reviews: 76,
    hours: 'By appointment',
    services: [
      'Event Photography',
      'Portrait Sessions',
      'Commercial Photography',
      'Photo Editing',
    ],
    tags: ['Photography', 'Events', 'Portraits', 'Professional'],
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return mockServices.find((service) => service.slug === slug);
};

// Legacy function for backward compatibility (deprecated)
export const getServiceById = (id: string): ServiceDetail | undefined => {
  return mockServices.find((service) => service.id === id);
};

// Service category labels
export const serviceCategoryLabels: Record<ServiceCategory, string> = {
  all: 'All',
  legal: 'Legal',
  beauty: 'Beauty',
  fitness: 'Fitness',
  food: 'Food',
  realestate: 'Real Estate',
  others: 'Others',
};

// Available service categories
export const serviceCategories: ServiceCategory[] = [
  'all',
  'legal',
  'beauty',
  'fitness',
  'food',
  'realestate',
  'others',
];
