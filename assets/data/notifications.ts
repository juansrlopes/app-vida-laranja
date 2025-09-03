// Notifications data for Notifications screen
// Contains notification types, mock data, and related functionality

export interface NotificationItem {
  id: string;
  type: 'event' | 'recommendation' | 'system' | 'social';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

// Mock notification data
export const mockNotifications: NotificationItem[] = [
  {
    id: '1',
    type: 'event',
    title: 'New Event: Jazz Night at Concertgebouw',
    message:
      "A special jazz performance is happening tonight at 8 PM. Don't miss out!",
    timestamp: '2 hours ago',
    isRead: false,
  },
  {
    id: '2',
    type: 'recommendation',
    title: 'New Restaurant Recommendation',
    message:
      'Check out "De Kas" - a highly rated restaurant that matches your preferences.',
    timestamp: '5 hours ago',
    isRead: false,
  },
  {
    id: '3',
    type: 'social',
    title: 'Your review was liked',
    message:
      'Someone liked your review of "Café de Reiger". Keep sharing your experiences!',
    timestamp: '1 day ago',
    isRead: true,
  },
  {
    id: '4',
    type: 'system',
    title: 'Profile Updated Successfully',
    message: 'Your profile information has been updated. Changes are now live.',
    timestamp: '2 days ago',
    isRead: true,
  },
  {
    id: '5',
    type: 'event',
    title: 'Food Festival This Weekend',
    message:
      'Amsterdam Food Festival is happening at Vondelpark. Discover amazing local cuisine!',
    timestamp: '3 days ago',
    isRead: true,
  },
  {
    id: '6',
    type: 'recommendation',
    title: 'Top 5 Update: New Burger Spots',
    message:
      "We've updated our Top 5 burger recommendations with some exciting new additions.",
    timestamp: '1 week ago',
    isRead: true,
  },
  {
    id: '7',
    type: 'system',
    title: 'Welcome to Vida Laranja!',
    message:
      "Thanks for joining us! Explore Amsterdam's best spots and start discovering.",
    timestamp: '2 weeks ago',
    isRead: true,
  },
];
