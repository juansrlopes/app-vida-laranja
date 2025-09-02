import { EventCategory } from '@/components/EventsSection';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface EventFilterProps {
  selectedCategory: EventCategory;
  onCategoryChange: (category: EventCategory) => void;
}

// Category display names
const categoryLabels: Record<EventCategory, string> = {
  all: 'All',
  music: 'Music',
  art: 'Art',
  food: 'Food',
  wellness: 'Wellness',
  workshop: 'Workshop',
  festival: 'Festival',
};

export default function EventFilter({
  selectedCategory,
  onCategoryChange,
}: EventFilterProps) {
  const categories: EventCategory[] = [
    'all',
    'music',
    'art',
    'food',
    'wellness',
    'workshop',
    'festival',
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <Pressable
              key={category}
              style={[
                styles.filterButton,
                {
                  backgroundColor: isSelected ? Colors.tint : '#f5f5f5',
                },
              ]}
              onPress={() => onCategoryChange(category)}
              android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color: isSelected ? '#fff' : Colors.text,
                  },
                ]}
              >
                {categoryLabels[category]}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    // fontFamily: 'Inter-Bold', // TODO: Uncomment when font is available
  },
});
