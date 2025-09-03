import CategoryFilter from '@/components/ui/CategoryFilter';
import ItemList from '@/components/ui/ItemList';
import { Colors } from '@/constants';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { EventCategory, EventDetail, mockEvents } from '../../../assets/data';

// Event category labels
const eventCategoryLabels: Record<EventCategory, string> = {
  all: 'All',
  music: 'Music',
  art: 'Art',
  food: 'Food',
  wellness: 'Wellness',
  workshop: 'Workshop',
  festival: 'Festival',
};

// Available event categories
const eventCategories: EventCategory[] = [
  'all',
  'music',
  'art',
  'food',
  'wellness',
  'workshop',
  'festival',
];

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
