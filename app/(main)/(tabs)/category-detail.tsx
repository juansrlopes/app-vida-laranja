import CategoryDetailScreen from '@/app/screens/category-detail';
import { useLocalSearchParams } from 'expo-router';

// Navigation wrapper for Category Detail screen
// This file handles the routing while the actual UI is in screens/category-detail
// Keeps tab navigation visible while showing category details
export default function CategoryDetailRoute() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();

  if (!categoryId) {
    return null;
  }

  return <CategoryDetailScreen categoryId={categoryId} />;
}
