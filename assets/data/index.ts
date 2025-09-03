// Mock data exports
// This file centralizes all mock data for easy importing across the app

export { getEventById, mockEvents } from './events';
export { getHighlightById, mockHighlights } from './highlights';
export {
  getServiceById,
  mockServices,
  serviceCategories,
  serviceCategoryLabels,
} from './services';
export { categoriesData, getCategoryBySlug, top5Items } from './top5';

// Re-export types for convenience
export type { EventCategory, EventItem } from '@/components/EventsSection';
export type { HighlightItem } from '@/components/HighlightsCarousel';
export type { EventDetail } from './events';
export type { HighlightDetail } from './highlights';
export type { ServiceCategory, ServiceDetail, ServiceItem } from './services';
export type { Category, CategoryItem, Top5Item } from './top5';
