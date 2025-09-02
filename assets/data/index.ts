// Mock data exports
// This file centralizes all mock data for easy importing across the app

export { categoriesData, getCategoryBySlug } from './categories';
export { getEventById, mockEvents } from './events';
export { mockHighlights } from './highlights';
export {
  getServiceById,
  mockServices,
  serviceCategories,
  serviceCategoryLabels,
} from './services';
export { top5Items } from './top5';

// Re-export types for convenience
export type { EventCategory, EventItem } from '@/components/EventsSection';
export type { HighlightItem } from '@/components/HighlightsCarousel';
export type { Category, CategoryItem } from './categories';
export type { EventDetail } from './events';
export type { ServiceCategory, ServiceDetail, ServiceItem } from './services';
export type { Top5Item } from './top5';
