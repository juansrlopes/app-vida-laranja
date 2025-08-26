import { Colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

// Home screen UI component
// This is the actual screen content, separated from navigation logic
export default function HomeScreen() {
  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <Text style={[styles.title, { color: Colors.text }]}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'OldStandardTT-Bold',
  },
});
