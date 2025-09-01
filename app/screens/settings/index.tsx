import { Colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <Text style={[styles.title, { color: Colors.text }]}>Settings</Text>
      <Text style={[styles.description, { color: Colors.text }]}>
        App preferences and configuration
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    // fontFamily: 'OldStandardTT-Bold', // TODO: Uncomment when font is available
  },
  description: {
    marginTop: 16,
    textAlign: 'center',
    opacity: 0.7,
    fontFamily: 'Inter-Regular',
  },
});
