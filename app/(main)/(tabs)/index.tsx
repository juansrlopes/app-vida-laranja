import ClubSection from '@/components/features/ClubSection';
import type { EventItem } from '@/components/features/EventsSection';
import EventsSection from '@/components/features/EventsSection';
import HighlightsCarousel from '@/components/features/HighlightsCarousel';
import MapSection from '@/components/features/MapSection';
import ScreenContainer from '@/components/layout/ScreenContainer';
import Divider from '@/components/ui/Divider';
import { router } from 'expo-router';
import { mockEvents, mockHighlights } from '../../../assets/data';

// Home screen UI component
// This is the actual screen content, separated from navigation logic
export default function HomeScreen() {
  const handleFindFavourites = () => {
    // Navigate to full-screen map screen
    router.push('/(main)/(tabs)/map');
  };

  const handleViewAllEvents = () => {
    router.push('/(main)/(tabs)/events');
  };

  const handleClubAction = () => {
    // Navigate to services screen for club-related services
    router.push('/(main)/(tabs)/services');
  };

  const handleEventPress = (event: EventItem) => {
    // Navigate to event detail screen
    router.push(`/(main)/(tabs)/event-detail?eventSlug=${event.slug}`);
  };

  return (
    <ScreenContainer scrollable>
      {/* Highlights Carousel */}
      <HighlightsCarousel items={mockHighlights} title="Highlights" />

      {/* Divider */}
      <Divider />

      {/* Map Section */}
      <MapSection onFindFavourites={handleFindFavourites} />

      {/* Divider */}
      <Divider />

      {/* Events Section */}
      <EventsSection
        events={mockEvents}
        title="Events"
        onViewAll={handleViewAllEvents}
        onEventPress={handleEventPress}
      />

      {/* Divider */}
      <Divider />

      {/* Club Section */}
      <ClubSection onButtonPress={handleClubAction} />
    </ScreenContainer>
  );
}
