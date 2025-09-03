import FilterableListScreen from '@/components/ui/FilterableListScreen';
import { router } from 'expo-router';
import React from 'react';
import {
  eventCategories,
  eventCategoryLabels,
  EventDetail,
  mockEvents,
} from '../../../assets/data';

// Events screen UI component
// Displays a scrollable list of all events with image, title, and subtitle
// Includes category filtering functionality using reusable FilterableListScreen
export default function EventsScreen() {
  const handleEventPress = (event: EventDetail) => {
    router.push(`/(main)/(tabs)/event-detail?eventSlug=${event.slug}`);
  };

  const getEventCategory = (event: EventDetail) => event.category;

  return (
    <FilterableListScreen
      data={mockEvents}
      categories={eventCategories}
      categoryLabels={eventCategoryLabels}
      onItemPress={handleEventPress}
      getItemCategory={getEventCategory}
    />
  );
}
