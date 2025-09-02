import EventFilter from '@/components/EventFilter';
import { Colors } from '@/constants/Colors';
import React, { useMemo, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { EventCategory, EventItem, mockEvents } from '../../../assets/data';

// Events screen UI component
// Displays a scrollable list of all events with image, title, and subtitle
// Includes category filtering functionality
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
  const renderEventItem = ({ item }: { item: EventItem }) => (
    <View style={styles.eventCard}>
      <Image source={item.image} style={styles.eventImage} resizeMode="cover" />
      <View style={styles.eventContent}>
        <Text style={[styles.eventTitle, { color: Colors.text }]}>
          {item.title}
        </Text>
        <Text style={[styles.eventSubtitle, { color: Colors.text }]}>
          {item.subtitle}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      {/* Category Filter */}
      <EventFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Events List */}
      <FlatList
        data={filteredEvents}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 20,
  },
  eventCard: {
    marginBottom: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  eventContent: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    // fontFamily: 'Inter-Bold', // TODO: Uncomment when font is available
  },
  eventSubtitle: {
    fontSize: 16,
    opacity: 0.7,
    lineHeight: 22,
    // fontFamily: 'Inter-Regular', // TODO: Uncomment when font is available
  },
});
