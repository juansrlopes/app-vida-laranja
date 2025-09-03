import CategoryFilter from '@/components/ui/CategoryFilter';
import ItemList from '@/components/ui/ItemList';
import { Colors } from '@/constants';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

// List item interface that all items must extend
interface ListItem {
  id: string;
  image: any;
  title: string;
  subtitle: string;
}

// Generic filterable list screen component
// Handles category filtering and item display for any data type
interface FilterableListScreenProps<T extends ListItem> {
  data: T[];
  categories: string[];
  categoryLabels: Record<string, string>;
  onItemPress: (item: T) => void;
  getItemCategory: (item: T) => string;
}

export default function FilterableListScreen<T extends ListItem>({
  data,
  categories,
  categoryLabels,
  onItemPress,
  getItemCategory,
}: FilterableListScreenProps<T>) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter items based on selected category
  const filteredData = useMemo(() => {
    if (selectedCategory === 'all') {
      return data;
    }
    return data.filter((item) => getItemCategory(item) === selectedCategory);
  }, [data, selectedCategory, getItemCategory]);

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        categoryLabels={categoryLabels}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Items List */}
      <ItemList data={filteredData} onItemPress={onItemPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
