import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  // Navigate to main app (drawer + tabs navigation)
  const handleGetStarted = () => {
    router.push('/(main)/(tabs)');
  };

  // Orange gradient colors matching the app theme
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
        {/* <View style={styles.logoContainer}>
          <Text style={[styles.logoEmoji, { color: '#FF8C00' }]}>🍊</Text>
        </View> */}

        {/* Welcome Text */}
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: Colors.text }]}>
            Welcome to
          </Text>
          <Text style={[styles.appName, { color: Colors.tint }]}>
            Vida Laranja
          </Text>
          <Text style={[styles.subtitle, { color: Colors.text }]}>
            Your gateway to a vibrant lifestyle
          </Text>
        </View>

        {/* Get Started Button */}
        <Pressable
          style={[styles.button, { backgroundColor: Colors.tint }]}
          onPress={handleGetStarted}
          android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
        >
          <Text style={[styles.buttonText, { color: Colors.background }]}>
            Get Started
          </Text>
        </Pressable>

        {/* Optional tagline */}
        <Text style={[styles.tagline, { color: Colors.text }]}>
          Discover events, services, and recommendations
        </Text>
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
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'OldStandardTT-Bold',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
    fontFamily: 'Inter-Regular',
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
    fontFamily: 'Inter-Bold',
  },
  tagline: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.6,
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
  },
});
