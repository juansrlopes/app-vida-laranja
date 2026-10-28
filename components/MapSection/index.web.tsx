import { Colors, Typography } from '@/constants';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface MapSectionProps {
  onFindFavourites?: () => void;
}

export default function MapSection({ onFindFavourites }: MapSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text style={[styles.placeholderText, { color: Colors.text }]}>
          The map is available in the iOS and Android app.
        </Text>
      </View>
      <View style={styles.linkContainer}>
        <Pressable style={styles.linkButton} onPress={onFindFavourites}>
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
  placeholder: {
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  placeholderText: {
    ...Typography.bodyMedium,
    textAlign: 'center',
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
