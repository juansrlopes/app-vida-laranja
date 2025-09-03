import CategoryFilter from '@/components/ui/CategoryFilter';
import ItemList from '@/components/ui/ItemList';
import { Colors } from '@/constants';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  eventCategories,
  EventCategory,
  eventCategoryLabels,
  EventDetail,
  mockEvents,
} from '../../../assets/data';

// Events screen UI component
// Displays a scrollable list of all events with image, title, and subtitle
// Includes category filtering functionality using reusable components
export default function EventsScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<EventCategory>('all');

  // Filter events based on selected category
  const filteredEvents = useMemo(() => {
    if (selectedCategory === 'all') {
      return mockEvents;
    }
    return mockEvents.filter((event) => event.category === selectedCategory);
  }, [selectedCategory]);

  const handleEventPress = (event: EventDetail) => {
    router.push(`/(main)/(tabs)/event-detail?eventSlug=${event.slug}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      {/* Category Filter */}
      <CategoryFilter
        categories={eventCategories}
        categoryLabels={eventCategoryLabels}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Events List */}
      <ItemList data={filteredEvents} onItemPress={handleEventPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
