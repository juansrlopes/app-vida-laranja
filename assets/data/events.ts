import { EventCategory, EventItem } from '@/components/EventsSection';

// Extended event interface for detailed views
export interface EventDetail extends EventItem {
  slug: string; // URL-friendly identifier
  description: string;
  location: string;
  date: string;
  time: string;
  price: string;
  organizer: string;
  duration: string;
  capacity?: string;
  tags: string[];
}

// Available event categories
export const eventCategories: EventCategory[] = [
  'all',
  'music',
  'art',
  'food',
  'wellness',
  'workshop',
  'festival',
];

// Event category labels
export const eventCategoryLabels: Record<EventCategory, string> = {
  all: 'All',
  music: 'Music',
  art: 'Art',
  food: 'Food',
  wellness: 'Wellness',
  workshop: 'Workshop',
  festival: 'Festival',
};

export const mockEvents: EventDetail[] = [
  {
    id: '1',
    slug: 'music-festival',
    image: require('../images/events.webp'),
    title: 'Music Festival',
    subtitle: 'Tonight at 8 PM',
    category: 'music',
    description:
      'Join us for an incredible night of live music featuring local and international artists. Experience diverse genres from electronic to indie rock in the heart of Amsterdam.',
    location: 'Vondelpark Pavilion',
    date: 'December 15, 2025',
    time: '8:00 PM - 2:00 AM',
    price: '€25 - €45',
    organizer: 'Amsterdam Music Events',
    duration: '6 hours',
    capacity: '500 people',
    tags: ['Live Music', 'Outdoor', 'Multiple Artists', 'Food & Drinks'],
  },
  {
    id: '2',
    slug: 'art-workshop',
    image: require('../images/events.webp'),
    title: 'Art Workshop',
    subtitle: 'Tomorrow 2 PM',
    category: 'art',
    description:
      'Learn watercolor painting techniques from professional artists. All materials provided. Perfect for beginners and intermediate artists looking to improve their skills.',
    location: 'Creative Studio Amsterdam',
    date: 'December 16, 2025',
    time: '2:00 PM - 5:00 PM',
    price: '€35',
    organizer: 'Amsterdam Art Collective',
    duration: '3 hours',
    capacity: '15 people',
    tags: [
      'Watercolor',
      'Beginner Friendly',
      'Materials Included',
      'Small Group',
    ],
  },
  {
    id: '3',
    slug: 'food-market',
    image: require('../images/events.webp'),
    title: 'Food Market',
    subtitle: 'Weekend Special',
    category: 'food',
    description:
      "Discover Amsterdam's finest local produce, artisanal foods, and international cuisine. Meet local farmers and food artisans while enjoying live cooking demonstrations.",
    location: 'Nieuwmarkt Square',
    date: 'December 21-22, 2025',
    time: '10:00 AM - 6:00 PM',
    price: 'Free Entry',
    organizer: 'Amsterdam Food Council',
    duration: '2 days',
    tags: [
      'Local Produce',
      'Artisanal Food',
      'Cooking Demos',
      'Family Friendly',
    ],
  },
  {
    id: '4',
    slug: 'yoga-class',
    image: require('../images/events.webp'),
    title: 'Yoga Class',
    subtitle: 'Every Monday',
    category: 'wellness',
    description:
      'Start your week with mindful movement and meditation. This Hatha yoga class is suitable for all levels and focuses on breath awareness and gentle stretching.',
    location: 'Wellness Center Amsterdam',
    date: 'Every Monday',
    time: '7:00 PM - 8:30 PM',
    price: '€20 per class',
    organizer: 'Mindful Movement Studio',
    duration: '1.5 hours',
    capacity: '20 people',
    tags: ['Hatha Yoga', 'All Levels', 'Meditation', 'Weekly Class'],
  },
  {
    id: '5',
    slug: 'photography-workshop',
    image: require('../images/events.webp'),
    title: 'Photography Workshop',
    subtitle: 'Saturday 10 AM',
    category: 'workshop',
    description:
      "Master the art of street photography in Amsterdam's most photogenic locations. Learn composition, lighting, and editing techniques from award-winning photographers.",
    location: 'Meeting at Central Station',
    date: 'December 21, 2025',
    time: '10:00 AM - 4:00 PM',
    price: '€65',
    organizer: 'Amsterdam Photo Academy',
    duration: '6 hours',
    capacity: '12 people',
    tags: ['Street Photography', 'Walking Tour', 'Editing Tips', 'All Levels'],
  },
  {
    id: '6',
    slug: 'jazz-night',
    image: require('../images/events.webp'),
    title: 'Jazz Night',
    subtitle: 'Friday 9 PM',
    category: 'music',
    description:
      'Intimate jazz evening featuring the Amsterdam Jazz Quartet. Enjoy classic and contemporary jazz in a cozy atmosphere with craft cocktails and fine dining.',
    location: 'Blue Note Amsterdam',
    date: 'December 20, 2025',
    time: '9:00 PM - 12:00 AM',
    price: '€30 - €50',
    organizer: 'Blue Note Amsterdam',
    duration: '3 hours',
    capacity: '80 people',
    tags: ['Live Jazz', 'Intimate Setting', 'Cocktails', 'Fine Dining'],
  },
  {
    id: '7',
    slug: 'street-food-festival',
    image: require('../images/events.webp'),
    title: 'Street Food Festival',
    subtitle: 'This Weekend',
    category: 'festival',
    description:
      'A celebration of international street food with over 30 vendors offering authentic dishes from around the world. Live music and cultural performances throughout the weekend.',
    location: 'Westerpark',
    date: 'December 21-22, 2025',
    time: '12:00 PM - 10:00 PM',
    price: 'Free Entry',
    organizer: 'Amsterdam Food Festivals',
    duration: '2 days',
    tags: [
      'International Food',
      'Live Music',
      'Cultural Shows',
      'Family Event',
    ],
  },
  {
    id: '8',
    slug: 'painting-class',
    image: require('../images/events.webp'),
    title: 'Painting Class',
    subtitle: 'Wednesday 3 PM',
    category: 'art',
    description:
      'Explore acrylic painting techniques in this hands-on workshop. Create your own masterpiece while learning color theory, brush techniques, and composition from experienced instructors.',
    location: 'Art Studio Jordaan',
    date: 'December 18, 2025',
    time: '3:00 PM - 6:00 PM',
    price: '€40',
    organizer: 'Jordaan Art School',
    duration: '3 hours',
    capacity: '12 people',
    tags: ['Acrylic Painting', 'Color Theory', 'Hands-on', 'Take Home Art'],
  },
];

// Helper function to get event by slug
export const getEventBySlug = (slug: string): EventDetail | undefined => {
  return mockEvents.find((event) => event.slug === slug);
};

// Legacy function for backward compatibility (deprecated)
export const getEventById = (id: string): EventDetail | undefined => {
  return mockEvents.find((event) => event.id === id);
};
