import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function BrandLogo() {
  return (
    <View style={styles.container}>
      {/* Brand logo image at natural size */}
      <Image source={require('../../assets/images/header-logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
});
