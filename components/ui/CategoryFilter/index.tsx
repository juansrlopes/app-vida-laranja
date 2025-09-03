import { Colors, Typography } from '@/constants';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface CategoryFilterProps<T extends string> {
  categories: T[];
  categoryLabels: Record<T, string>;
  selectedCategory: T;
  onCategoryChange: (category: T) => void;
}

// Generic category filter component
// Can be used for events, services, or any other categorized content
export default function CategoryFilter<T extends string>({
  categories,
  categoryLabels,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps<T>) {
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
    ...Typography.buttonSmall,
  },
});
