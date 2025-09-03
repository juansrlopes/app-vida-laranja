// Mock data exports
// This file centralizes all mock data for easy importing across the app

export {
  eventCategories,
  eventCategoryLabels,
  getEventById,
  getEventBySlug,
  mockEvents,
} from './events';
export { faqData } from './faq';
export {
  getHighlightById,
  getHighlightBySlug,
  mockHighlights,
} from './highlights';
export { mockNotifications } from './notifications';
export { mockUser } from './profile';
export {
  getServiceById,
  getServiceBySlug,
  mockServices,
  serviceCategories,
  serviceCategoryLabels,
} from './services';
export { mockSettings } from './settings';
export { categoriesData, getCategoryBySlug, top5Items } from './top5';

// Re-export types for convenience
export type {
  EventCategory,
  EventItem,
} from '@/components/features/EventsSection';
export type { HighlightItem } from '@/components/features/HighlightsCarousel';
export type { EventDetail } from './events';
export type { FaqItem } from './faq';
export type { HighlightDetail } from './highlights';
export type { NotificationItem } from './notifications';
export type { UserProfile } from './profile';
export type { ServiceCategory, ServiceDetail, ServiceItem } from './services';
export type { AppSettings } from './settings';
export type { Category, CategoryItem, Top5Item } from './top5';
