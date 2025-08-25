import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function NotificationsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Notifications</ThemedText>
      <ThemedText style={styles.description}>
        Manage your notifications and alerts
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
