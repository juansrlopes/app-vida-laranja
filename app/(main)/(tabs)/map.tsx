import { Colors, Typography } from '@/constants';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

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

// Full-screen map screen
// Shows an interactive map with user location and points of interest
export default function MapScreen() {
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
      {/* Full Screen Map */}
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
          <View style={styles.loadingCard}>
            <Text style={[styles.loadingText, { color: Colors.text }]}>
              Getting your location...
            </Text>
          </View>
        </View>
      )}

      {/* Map Title */}
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, { color: Colors.text }]}>
          Amsterdam Map
        </Text>
        <Text style={[styles.subtitleText, { color: Colors.gray }]}>
          Discover events and services near you
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  map: {
    flex: 1,
  },

  myLocationButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
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
    fontSize: 20,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  loadingText: {
    ...Typography.bodyMedium,
    fontWeight: '500',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titleText: {
    ...Typography.h3,
    marginBottom: 4,
  },
  subtitleText: {
    ...Typography.bodySmall,
  },
});
