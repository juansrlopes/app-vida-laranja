// FAQ data for Help & Support screen
// Contains frequently asked questions and answers about the app

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Mock FAQ data
export const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'How do I find the best restaurants in Amsterdam?',
    answer:
      'Use our Top 5 section to discover the most popular categories like burgers, fries, and coffee. You can also browse our curated recommendations and check out local events for food festivals.',
  },
  {
    id: '2',
    question: 'How do I save my favorite places?',
    answer:
      'Tap the heart icon on any restaurant or location to add it to your favorites. You can view all your saved places in your Profile under "My Favorites".',
  },
  {
    id: '3',
    question: 'Can I get notifications for new events?',
    answer:
      'Yes! Go to Settings > Notifications and enable "Event Reminders" and "New Recommendations" to stay updated on the latest happenings in Amsterdam.',
  },
  {
    id: '4',
    question: 'How do I change my location preferences?',
    answer:
      'Visit Settings > Privacy & Security and toggle "Share Location" to enable location-based recommendations. You can also change your distance unit in Preferences.',
  },
  {
    id: '5',
    question: 'Is my data secure?',
    answer:
      'Absolutely! We take your privacy seriously. You can control data collection and profile visibility in Settings > Privacy & Security. We never share your personal information without consent.',
  },
  {
    id: '6',
    question: 'How do I report a problem with a listing?',
    answer:
      "Contact us through the support options below, and we'll investigate any issues with restaurant information or reviews promptly.",
  },
];
