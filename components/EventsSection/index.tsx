import { Colors, Typography } from '@/constants';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

// Event categories
export type EventCategory =
  | 'all'
  | 'music'
  | 'art'
  | 'food'
  | 'wellness'
  | 'workshop'
  | 'festival';

// Type definition for event items
export interface EventItem {
  id: string;
  image: any; // For require() images or { uri: string } for remote images
  title: string;
  subtitle: string;
  category: EventCategory;
}

interface EventsSectionProps {
  events: EventItem[];
  title?: string;
  onViewAll?: () => void;
}

export default function EventsSection({
  events,
  title = 'Events',
  onViewAll,
}: EventsSectionProps) {
  const renderEventItem = (event: EventItem) => (
    <View key={event.id} style={styles.eventItem}>
      {/* Event Image */}
      <View style={styles.imageContainer}>
        <Image
          source={event.image}
          style={styles.eventImage}
          resizeMode="cover"
        />
      </View>

      {/* Event Text Content */}
      <View style={styles.textContainer}>
        <Text
          style={[styles.eventTitle, { color: Colors.text }]}
          numberOfLines={2}
        >
          {event.title}
        </Text>
        <Text
          style={[styles.eventSubtitle, { color: Colors.gray }]}
          numberOfLines={1}
        >
          {event.subtitle}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Section Header with Title and CTA Button */}
      <View style={styles.headerContainer}>
        <Text style={[styles.sectionTitle, { color: Colors.text }]}>
          {title}
        </Text>
        {onViewAll && (
          <Pressable
            style={[styles.ctaButton, { backgroundColor: Colors.tint }]}
            onPress={onViewAll}
            android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
          >
            <Text style={styles.ctaButtonText}>View All</Text>
          </Pressable>
        )}
      </View>

      {/* Events Grid - 2x2 layout */}
      <View style={styles.eventsGrid}>
        {/* First Row */}
        <View style={styles.gridRow}>
          {events.slice(0, 2).map(renderEventItem)}
        </View>
        {/* Second Row */}
        <View style={styles.gridRow}>
          {events.slice(2, 4).map(renderEventItem)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: Typography.h2,
  ctaButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  ctaButtonText: {
    ...Typography.buttonSmall,
    color: '#000',
  },
  eventsGrid: {
    paddingHorizontal: 20,
    gap: 12,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 12,
  },
  eventItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  eventImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  eventTitle: {
    ...Typography.bodyRegularSemiBold,
    marginBottom: 2,
  },
  eventSubtitle: {
    ...Typography.caption,
  },
});
