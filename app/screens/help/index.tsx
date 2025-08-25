import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function HelpScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Help & Support</ThemedText>
      <ThemedText style={styles.description}>
        Get help and contact support
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  description: {
    marginTop: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
});
