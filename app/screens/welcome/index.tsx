import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

export default function WelcomeScreen() {
  const handleGetStarted = () => {
    router.push('/(drawer)/(tabs)');
  };

  // Orange gradient for Vida Laranja theme
  const gradientColors = ['#fff5e6', '#ffe0b3', '#ffcc80'] as const;

  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        {/* App Logo/Icon Area */}
        <View style={styles.logoContainer}>
          <ThemedText style={[styles.logoEmoji, { color: '#FF8C00' }]}>🍊</ThemedText>
        </View>

        {/* Welcome Text */}
        <View style={styles.textContainer}>
          <ThemedText type="title" style={styles.title}>
            Welcome to
          </ThemedText>
          <ThemedText type="title" style={[styles.appName, { color: Colors.tint }]}>
            Vida Laranja
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Your gateway to a vibrant lifestyle
          </ThemedText>
        </View>

        {/* Get Started Button */}
        <Pressable
          style={[styles.button, { backgroundColor: Colors.tint }]}
          onPress={handleGetStarted}
          android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
        >
          <ThemedText style={[styles.buttonText, { color: Colors.background }]}>
            Get Started
          </ThemedText>
        </Pressable>

        {/* Optional tagline */}
        <ThemedText style={styles.tagline}>
          Discover events, services, and recommendations
        </ThemedText>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    maxWidth: 400,
    width: '100%',
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logoEmoji: {
    fontSize: 80,
    textAlign: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 8,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    marginBottom: 30,
    minWidth: 200,
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
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  tagline: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.6,
    lineHeight: 20,
  },
});
