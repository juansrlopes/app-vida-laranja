import ScreenContainer from '@/components/layout/ScreenContainer';
import { Colors, Typography } from '@/constants';
import { StyleSheet, Text } from 'react-native';

export default function RecommendationsScreen() {
  return (
    <ScreenContainer style={styles.centeredContainer}>
      <Text style={[styles.title, { color: Colors.text }]}>
        Recommendations
      </Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...Typography.h1,
  },
});
