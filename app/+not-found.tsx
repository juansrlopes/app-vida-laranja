import ScreenContainer from '@/components/layout/ScreenContainer';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.message}>Page not found</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/(main)/(tabs)')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 72,
    fontWeight: '700',
    color: Colors.tint,
    marginBottom: 8,
  },
  message: {
    fontSize: 18,
    color: Colors.gray,
    marginBottom: 32,
  },
  button: {
    backgroundColor: Colors.tint,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
});
