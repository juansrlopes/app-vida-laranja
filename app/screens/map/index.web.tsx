import { Colors, Typography } from '@/constants';
import { StyleSheet, Text, View } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: Colors.text }]}>Amsterdam Map</Text>
      <Text style={[styles.subtitle, { color: Colors.gray }]}>
        The map is available in the iOS and Android app.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    ...Typography.h3,
    marginBottom: 8,
  },
  subtitle: {
    ...Typography.bodyMedium,
    textAlign: 'center',
  },
});
