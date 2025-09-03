import FilterableListScreen from '@/components/ui/FilterableListScreen';
import { router } from 'expo-router';
import React from 'react';
import {
  mockServices,
  serviceCategories,
  serviceCategoryLabels,
  ServiceDetail,
} from '../../../assets/data';

// Services screen UI component
// Displays a scrollable list of all services with image, title, and subtitle
// Includes category filtering functionality using reusable FilterableListScreen
export default function ServicesScreen() {
  const handleServicePress = (service: ServiceDetail) => {
    router.push(`/(main)/(tabs)/service-detail?serviceSlug=${service.slug}`);
  };

  const getServiceCategory = (service: ServiceDetail) => service.category;

  return (
    <FilterableListScreen
      data={mockServices}
      categories={serviceCategories}
      categoryLabels={serviceCategoryLabels}
      onItemPress={handleServicePress}
      getItemCategory={getServiceCategory}
    />
  );
}
