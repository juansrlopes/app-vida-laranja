import ClubSection from '@/components/ClubSection';
import Divider from '@/components/Divider';
import EventsSection from '@/components/EventsSection';
import HighlightsCarousel from '@/components/HighlightsCarousel';
import MapSection from '@/components/MapSection';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { mockEvents, mockHighlights } from '../../../assets/data';

// Home screen UI component
// This is the actual screen content, separated from navigation logic
export default function HomeScreen() {
  const handleFindFavourites = () => {
    // Navigate to profile screen where user can view their favorites
    router.push('/(main)/(tabs)/profile');
  };

  const handleViewAllEvents = () => {
    router.push('/(main)/(tabs)/events');
  };

  const handleClubAction = () => {
    // Navigate to services screen for club-related services
    router.push('/(main)/(tabs)/services');
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors.background }]}
      showsVerticalScrollIndicator={false}
    >
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
      />

      {/* Divider */}
      <Divider />

      {/* Club Section */}
      <ClubSection onButtonPress={handleClubAction} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
