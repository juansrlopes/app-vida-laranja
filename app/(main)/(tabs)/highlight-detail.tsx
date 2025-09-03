import HighlightDetailScreen from '@/app/screens/highlight-detail';
import { useLocalSearchParams } from 'expo-router';

// Navigation wrapper for Highlight Detail screen
// This file handles the routing while the actual UI is in screens/highlight-detail
// Keeps tab navigation visible while showing highlight details
export default function HighlightDetailRoute() {
  const { highlightId } = useLocalSearchParams<{ highlightId: string }>();

  if (!highlightId) {
    return null;
  }

  return <HighlightDetailScreen highlightId={highlightId} />;
}
