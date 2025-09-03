import { Colors, Typography } from '@/constants';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

interface MapSectionProps {
  onFindFavourites?: () => void;
}

interface UserLocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

// Amsterdam coordinates as fallback
const AMSTERDAM_COORDS = {
  latitude: 52.3676,
  longitude: 4.9041,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function MapSection({ onFindFavourites }: MapSectionProps) {
  const [location, setLocation] = useState<UserLocation>(AMSTERDAM_COORDS);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [locationPermission, setLocationPermission] = useState<boolean>(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState<boolean>(true);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      // Request permission to access location
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setLocationPermission(false);
        setIsLoadingLocation(false);
        console.log('Location permission denied');
        return;
      }

      setLocationPermission(true);

      // Get current location
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      const userCoords = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };

      setUserLocation(userCoords);

      // Update map region to user's location
      setLocation({
        ...userCoords,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      setIsLoadingLocation(false);
    } catch (error) {
      console.error('Error getting location:', error);
      setIsLoadingLocation(false);
      setLocationPermission(false);
    }
  };

  const handleFindFavourites = () => {
    onFindFavourites?.();
  };

  const handleMyLocationPress = () => {
    if (!locationPermission) {
      Alert.alert(
        'Location Permission Required',
        'Please enable location permissions to see your current location on the map.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Retry', onPress: requestLocationPermission },
        ]
      );
      return;
    }

    if (userLocation) {
      setLocation({
        ...userLocation,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Map Container */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={location}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={locationPermission}
          showsMyLocationButton={false}
          showsCompass={true}
          showsScale={true}
          mapType="standard"
        >
          {/* User Location Marker (if available and different from device location) */}
          {userLocation && (
            <Marker
              coordinate={userLocation}
              title="Your Location"
              description="You are here"
              pinColor={Colors.tint}
            />
          )}

          {/* Amsterdam Center Marker */}
          <Marker
            coordinate={AMSTERDAM_COORDS}
            title="Amsterdam Center"
            description="Explore the heart of Amsterdam"
            pinColor="#FF6B6B"
          />
        </MapView>

        {/* My Location Button */}
        <Pressable
          style={styles.myLocationButton}
          onPress={handleMyLocationPress}
          android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
        >
          <Text style={styles.myLocationIcon}>📍</Text>
        </Pressable>

        {/* Loading Indicator */}
        {isLoadingLocation && (
          <View style={styles.loadingOverlay}>
            <Text style={[styles.loadingText, { color: Colors.text }]}>
              Getting your location...
            </Text>
          </View>
        )}
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
    position: 'relative',
  },
  map: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  myLocationButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  myLocationIcon: {
    fontSize: 18,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...Typography.bodyMedium,
    fontWeight: '500',
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
    ...Typography.button,
    textDecorationLine: 'underline',
  },
});
