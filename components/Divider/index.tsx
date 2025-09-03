import React from 'react';
import { StyleSheet, View } from 'react-native';

// Simple divider component with consistent styling
// No props needed - always uses the same design
export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginVertical: 20,
  },
});
