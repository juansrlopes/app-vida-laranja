// Profile data for Profile screen
// Contains user information, stats, and account details

export interface UserProfile {
  name: string;
  email: string;
  location: string;
  memberSince: string;
  favoriteCategories: string[];
  totalReviews: number;
  totalFavorites: number;
  profileImage: any; // For require() images
}

// Mock user data
export const mockUser: UserProfile = {
  name: 'Katarina Silva',
  email: 'katarina@vidalaranja.com',
  location: 'Amsterdam, Netherlands',
  memberSince: 'January 2017',
  favoriteCategories: ['Coffee', 'Fries', 'Bars'],
  totalReviews: 47,
  totalFavorites: 23,
  profileImage: require('../images/main-logo.png'), // Using app logo as placeholder
};
