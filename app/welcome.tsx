import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

export default function WelcomeScreen() {
  // Auto-navigate to main app after loading
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(main)/(tabs)');
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Orange gradient colors matching the app theme
  const gradientColors = ['#fff8f5', '#FDD5C7', '#F69167'] as const;

  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        {/* Main Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/main-logo.png')}
            style={styles.mainLogo}
            resizeMode="contain"
          />
        </View>

        {/* Loading Indicator */}
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.tint} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  mainLogo: {
    // Logo displays at natural size
    maxWidth: 250,
    maxHeight: 250,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
