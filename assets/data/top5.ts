// Top 5 categories and their detailed data
// Mock data for the Top 5 screen and category detail pages

export interface Top5Item {
  id: string;
  title: string;
  slug: string; // URL-friendly identifier for navigation
  image: any; // For require() images
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  image: any; // For require() images
  priceRange: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  items: CategoryItem[];
}

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categoriesData[slug];
};

// Sample top 5 categories for the grid
export const top5Items: Top5Item[] = [
  {
    id: '1',
    title: 'Fries',
    slug: 'fries',
    image: require('../images/fries.webp'), // Using fries image
  },
  {
    id: '2',
    title: 'Burgers',
    slug: 'burgers',
    image: require('../images/fries.webp'), // Using fries image
  },
  {
    id: '3',
    title: 'Coffee',
    slug: 'coffee',
    image: require('../images/fries.webp'), // Using fries image
  },
  {
    id: '4',
    title: 'Patisseries',
    slug: 'patisseries',
    image: require('../images/fries.webp'), // Using fries image
  },
  {
    id: '5',
    title: 'Bars',
    slug: 'bars',
    image: require('../images/fries.webp'), // Using fries image
  },
  {
    id: '6',
    title: 'Pizza',
    slug: 'pizza',
    image: require('../images/fries.webp'), // Using fries image
  },
];

// Mock data for each category with detailed items
export const categoriesData: Record<string, Category> = {
  fries: {
    id: 'fries',
    name: 'Fries',
    description: 'The best french fries spots in Amsterdam',
    items: [
      {
        id: '1',
        name: 'Vleminckx Sausmeesters',
        description:
          'Famous for their traditional Dutch fries and amazing sauces',
        rating: 4.8,
        address: 'Voetboogstraat 33, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '2',
        name: 'Manneken Pis',
        description: 'Belgian-style fries with authentic preparation',
        rating: 4.6,
        address: 'Damrak 41, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '3',
        name: 'Friet van Piet',
        description: 'Local favorite with crispy golden fries',
        rating: 4.5,
        address: 'Nieuwmarkt 15, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€',
      },
      {
        id: '4',
        name: 'De Reiger Friet',
        description: 'Traditional Dutch fries with homemade mayo',
        rating: 4.4,
        address: 'Jordaan District, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '5',
        name: 'Frites Atelier',
        description: 'Gourmet fries with premium toppings',
        rating: 4.3,
        address: 'Spuistraat 98, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
    ],
  },
  burgers: {
    id: 'burgers',
    name: 'Burgers',
    description: 'Top burger joints for the perfect bite',
    items: [
      {
        id: '1',
        name: 'The Burger Bar',
        description: 'Juicy beef burgers with fresh ingredients',
        rating: 4.7,
        address: 'Reguliersdwarsstraat 28, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
      {
        id: '2',
        name: 'Burgermeester',
        description: 'Organic burgers with local sourced meat',
        rating: 4.6,
        address: 'Elandsgracht 130, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '3',
        name: 'Cannibale Royale',
        description: 'Bold flavors and creative burger combinations',
        rating: 4.5,
        address: 'Handboogstraat 17, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
      {
        id: '4',
        name: 'Beef Chief',
        description: 'Premium beef burgers with artisan buns',
        rating: 4.4,
        address: 'Falckstraat 26, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '5',
        name: 'Holy Burger',
        description: 'Divine burgers with heavenly taste',
        rating: 4.3,
        address: 'Bilderdijkstraat 98, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
    ],
  },
  coffee: {
    id: 'coffee',
    name: 'Coffee',
    description: 'Best coffee shops for your caffeine fix',
    items: [
      {
        id: '1',
        name: 'White Label Coffee',
        description: 'Specialty coffee roasters with perfect brews',
        rating: 4.8,
        address: 'Westerstraat 259, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '2',
        name: 'Bocca Coffee',
        description: 'Local roastery with exceptional espresso',
        rating: 4.7,
        address: 'Kerkstraat 96, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '3',
        name: 'Coffee & Coconuts',
        description: 'Trendy spot with amazing atmosphere',
        rating: 4.6,
        address: 'Ceintuurbaan 282, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
      {
        id: '4',
        name: 'Lot Sixty One',
        description: 'Australian-style coffee culture',
        rating: 4.5,
        address: 'Kinkerstraat 112, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '5',
        name: 'Toki Coffee',
        description: 'Japanese-inspired coffee experience',
        rating: 4.4,
        address: 'Hartenstraat 2, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
    ],
  },
  patisseries: {
    id: 'patisseries',
    name: 'Patisseries',
    description: 'Finest pastries and sweet delights',
    items: [
      {
        id: '1',
        name: 'Patisserie Holtkamp',
        description: 'Traditional Dutch pastries since 1969',
        rating: 4.9,
        address: 'Vijzelgracht 15, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
      {
        id: '2',
        name: 'Lanskroon',
        description: 'Historic bakery with authentic Dutch treats',
        rating: 4.7,
        address: 'Singel 385, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '3',
        name: 'Patisserie Kuyt',
        description: 'Artisan pastries with French techniques',
        rating: 4.6,
        address: 'Utrechtsestraat 109, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
      {
        id: '4',
        name: 'Unlimited Delicious',
        description: 'Creative pastries and beautiful cakes',
        rating: 4.5,
        address: 'Haarlemmerstraat 122, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '5',
        name: 'Petit Gâteau',
        description: 'French-style patisserie with delicate flavors',
        rating: 4.4,
        address: 'Rozengracht 75, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
    ],
  },
  bars: {
    id: 'bars',
    name: 'Bars',
    description: 'Top bars for drinks and nightlife',
    items: [
      {
        id: '1',
        name: 'Tales & Spirits',
        description: 'Craft cocktails in a cozy atmosphere',
        rating: 4.8,
        address: 'Lijbaansgracht 5, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
      {
        id: '2',
        name: 'Door 74',
        description: 'Hidden speakeasy with premium cocktails',
        rating: 4.7,
        address: 'Reguliersdwarsstraat 74, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€€',
      },
      {
        id: '3',
        name: 'Café de Dokter',
        description: 'Historic brown café with character',
        rating: 4.6,
        address: 'Rozenboomsteeg 4, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '4',
        name: 'SkyLounge Amsterdam',
        description: 'Rooftop bar with stunning city views',
        rating: 4.5,
        address: 'Oosterdoksstraat 4, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€€',
      },
      {
        id: '5',
        name: 'Proeflokaal A. van Wees',
        description: 'Traditional jenever tasting house',
        rating: 4.4,
        address: 'Herengracht 319, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
    ],
  },
  pizza: {
    id: 'pizza',
    name: 'Pizza',
    description: 'Best pizza places in the city',
    items: [
      {
        id: '1',
        name: 'Pazzi',
        description: 'Authentic Neapolitan pizza with wood-fired oven',
        rating: 4.8,
        address: 'Eerste van Swindenstraat 14, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '2',
        name: 'La Perla',
        description: 'Classic Italian pizzeria since 1999',
        rating: 4.7,
        address: 'Tweede Tuindwarsstraat 53, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '3',
        name: 'Delfina',
        description: 'Artisan pizza with fresh local ingredients',
        rating: 4.6,
        address: 'Westerstraat 40, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
      {
        id: '4',
        name: 'Pizza Beppe',
        description: 'Roman-style pizza with crispy thin crust',
        rating: 4.5,
        address: 'De Clercqstraat 1, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€',
      },
      {
        id: '5',
        name: 'Sotto Pizza',
        description: 'Modern pizza with creative toppings',
        rating: 4.4,
        address: 'Bilderdijkstraat 65, Amsterdam',
        image: require('../images/fries.webp'),
        priceRange: '€€€',
      },
    ],
  },
};
