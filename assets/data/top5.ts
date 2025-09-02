// Top 5 categories grid data
// Mock data for the main Top 5 screen

export interface Top5Item {
  id: string;
  title: string;
  slug: string; // URL-friendly identifier for navigation
  image: any; // For require() images
}

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
