// Mock data exports
// This file centralizes all mock data for easy importing across the app

export { categoriesData, getCategoryBySlug } from './categories';
export { mockEvents } from './events';
export { mockHighlights } from './highlights';
export { top5Items } from './top5';

// Re-export types for convenience
export type { EventCategory, EventItem } from '@/components/EventsSection';
export type { HighlightItem } from '@/components/HighlightsCarousel';
export type { Category, CategoryItem } from './categories';
export type { Top5Item } from './top5';
