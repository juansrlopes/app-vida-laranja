import { Colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

export default function HelpScreen() {
  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <Text style={[styles.title, { color: Colors.text }]}>Help & Support</Text>
      <Text style={[styles.description, { color: Colors.text }]}>
        Get help and contact support
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
    fontFamily: 'OldStandardTT-Bold',
  },
  description: {
    marginTop: 16,
    textAlign: 'center',
    opacity: 0.7,
    fontFamily: 'Inter-Regular',
  },
});