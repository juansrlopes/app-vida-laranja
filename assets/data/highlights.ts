import { DetailItem } from '@/components/DetailScreen';
import { HighlightItem } from '@/components/HighlightsCarousel';

// Extended highlight interface for detailed views
export interface HighlightDetail extends HighlightItem, DetailItem {
  type: 'event' | 'service' | 'experience';
  location: string;
  date?: string;
  time?: string;
  price?: string;
  organizer?: string;
  duration?: string;
  capacity?: string;
  contact?: string;
  website?: string;
  rating?: number;
  reviews?: number;
  hours?: string;
  services?: string[];
}

export const mockHighlights: HighlightDetail[] = [
  {
    id: '1',
    image: require('../images/hightlights.jpg'),
    title: 'Summer Festival 2024',
    subtitle: 'Music & Arts',
    type: 'event',
    description:
      'Join us for the biggest summer festival in Amsterdam! Experience amazing live music, local art installations, food trucks, and cultural performances. A celebration of creativity and community in the heart of the city.',
    location: 'Vondelpark Main Stage',
    date: 'July 15-17, 2024',
    time: '2:00 PM - 11:00 PM',
    price: '€35 - €65',
    organizer: 'Amsterdam Cultural Events',
    duration: '3 days',
    capacity: '5000 people',
    tags: [
      'Music Festival',
      'Art',
      'Food',
      'Family Friendly',
      'Outdoor',
      'Cultural',
    ],
  },
  {
    id: '2',
    image: require('../images/hightlights.jpg'),
    title: 'Cooking Workshop',
    subtitle: 'Learn & Taste',
    type: 'service',
    description:
      'Master the art of Dutch cuisine with our hands-on cooking workshop. Learn to prepare traditional dishes like stroopwafels, bitterballen, and erwtensoep from experienced local chefs. All ingredients and equipment provided.',
    location: 'Culinary Studio Amsterdam',
    date: 'Every Saturday',
    time: '10:00 AM - 2:00 PM',
    price: '€75 per person',
    organizer: 'Amsterdam Culinary School',
    duration: '4 hours',
    capacity: '12 people',
    contact: '+31 20 123 4567',
    website: 'www.culinary-amsterdam.nl',
    rating: 4.8,
    reviews: 156,
    tags: [
      'Cooking',
      'Dutch Cuisine',
      'Hands-on',
      'Traditional',
      'Small Group',
      'All Levels',
    ],
  },
  {
    id: '3',
    image: require('../images/hightlights.jpg'),
    title: 'Yoga in the Park',
    subtitle: 'Health & Wellness',
    type: 'service',
    description:
      'Start your day with mindful movement in nature. Our outdoor yoga sessions combine traditional Hatha yoga with meditation, perfect for all skill levels. Enjoy the fresh air and peaceful atmosphere of Vondelpark.',
    location: 'Vondelpark Pavilion Area',
    hours: 'Daily: 7:00 AM - 9:00 AM',
    price: '€15 per class',
    organizer: 'Mindful Amsterdam',
    duration: '1.5 hours',
    contact: '+31 20 987 6543',
    website: 'www.mindful-amsterdam.com',
    rating: 4.9,
    reviews: 89,
    services: [
      'Hatha Yoga',
      'Meditation',
      'Breathing Exercises',
      'Mindfulness Training',
    ],
    tags: [
      'Yoga',
      'Outdoor',
      'Meditation',
      'All Levels',
      'Morning',
      'Wellness',
    ],
  },
  {
    id: '4',
    image: require('../images/hightlights.jpg'),
    title: 'Art Exhibition',
    subtitle: 'Local Artists',
    type: 'event',
    description:
      'Discover the vibrant contemporary art scene of Amsterdam through this curated exhibition featuring works by emerging local artists. Explore diverse mediums including paintings, sculptures, digital art, and interactive installations.',
    location: 'Modern Art Gallery Amsterdam',
    date: 'March 1 - April 30, 2024',
    time: '10:00 AM - 6:00 PM',
    price: 'Free Entry',
    organizer: 'Amsterdam Art Collective',
    duration: '2 months',
    contact: '+31 20 555 7890',
    website: 'www.amsterdam-art-collective.nl',
    tags: [
      'Contemporary Art',
      'Local Artists',
      'Gallery',
      'Free',
      'Cultural',
      'Interactive',
    ],
  },
];

// Helper function to get highlight by ID
export const getHighlightById = (id: string): HighlightDetail | undefined => {
  return mockHighlights.find((highlight) => highlight.id === id);
};
