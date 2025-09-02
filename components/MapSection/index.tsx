import { Colors } from '@/constants/Colors';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface MapSectionProps {
  onFindFavourites?: () => void;
}

export default function MapSection({ onFindFavourites }: MapSectionProps) {
  const handleFindFavourites = () => {
    // For now, just log - will be implemented later
    console.log('Find favourites pressed');
    onFindFavourites?.();
  };

  return (
    <View style={styles.container}>
      {/* Map Container */}
      <View style={styles.mapContainer}>
        {/* Placeholder map - will be replaced with actual map later */}
        <View style={[styles.mapPlaceholder, { backgroundColor: '#E8F4F8' }]}>
          <Text style={[styles.mapText, { color: Colors.gray }]}>
            🗺️ Amsterdam Map
          </Text>
          <Text style={[styles.mapSubtext, { color: Colors.gray }]}>
            Interactive map coming soon
          </Text>
        </View>
      </View>

      {/* Find Favourites Link */}
      <View style={styles.linkContainer}>
        <Pressable
          style={styles.linkButton}
          onPress={handleFindFavourites}
          android_ripple={{ color: 'rgba(246, 145, 103, 0.1)' }}
        >
          <Text style={[styles.linkText, { color: Colors.tint }]}>
            Find the favourites
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  mapContainer: {
    marginBottom: 16,
  },
  mapPlaceholder: {
    height: 200,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  mapText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    // fontFamily: 'Inter-Bold', // TODO: Uncomment when font is available
  },
  mapSubtext: {
    fontSize: 14,
    opacity: 0.7,
    // fontFamily: 'Inter-Regular', // TODO: Uncomment when font is available
  },
  linkContainer: {
    alignItems: 'center',
  },
  linkButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
    // fontFamily: 'Inter-Bold', // TODO: Uncomment when font is available
  },
});
