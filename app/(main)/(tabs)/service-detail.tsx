import ServiceDetailScreen from '@/app/screens/service-detail';
import { useLocalSearchParams } from 'expo-router';

// Navigation wrapper for Service Detail screen
// This file handles the routing while the actual UI is in screens/service-detail
// Keeps tab navigation visible while showing service details
export default function ServiceDetailRoute() {
  const { serviceSlug } = useLocalSearchParams<{ serviceSlug: string }>();

  if (!serviceSlug) {
    return null;
  }

  return <ServiceDetailScreen serviceSlug={serviceSlug} />;
}
