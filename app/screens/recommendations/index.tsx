import { Colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

export default function RecommendationsScreen() {
  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <Text style={[styles.title, { color: Colors.text }]}>
        Recommendations
      </Text>
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
    // fontFamily: 'OldStandardTT-Bold', // TODO: Uncomment when font is available
  },
});
