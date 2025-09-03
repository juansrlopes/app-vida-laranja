import CategoryFilter from '@/components/ui/CategoryFilter';
import ItemList from '@/components/ui/ItemList';
import { Colors } from '@/constants';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  mockServices,
  serviceCategories,
  ServiceCategory,
  serviceCategoryLabels,
  ServiceDetail,
} from '../../../assets/data';

// Services screen UI component
// Displays a scrollable list of all services with image, title, and subtitle
// Includes category filtering functionality using reusable components
export default function ServicesScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategory>('all');

  // Filter services based on selected category
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') {
      return mockServices;
    }
    return mockServices.filter(
      (service) => service.category === selectedCategory
    );
  }, [selectedCategory]);

  const handleServicePress = (service: ServiceDetail) => {
    router.push(`/(main)/(tabs)/service-detail?serviceSlug=${service.slug}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      {/* Category Filter */}
      <CategoryFilter
        categories={serviceCategories}
        categoryLabels={serviceCategoryLabels}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Services List */}
      <ItemList data={filteredServices} onItemPress={handleServicePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
