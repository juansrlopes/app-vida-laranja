import EventDetailScreen from '@/app/screens/event-detail';
import { useLocalSearchParams } from 'expo-router';

// Navigation wrapper for Event Detail screen
// This file handles the routing while the actual UI is in screens/event-detail
// Keeps tab navigation visible while showing event details
export default function EventDetailRoute() {
  const { eventId } = useLocalSearchParams<{ eventId: string }>();

  if (!eventId) {
    return null;
  }

  return <EventDetailScreen eventId={eventId} />;
}
