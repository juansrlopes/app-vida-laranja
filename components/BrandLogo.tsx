import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface BrandLogoProps {
  // No props needed - image displays at natural size
}

export default function BrandLogo({}: BrandLogoProps = {}) {
  return (
    <View style={styles.container}>
      {/* Brand logo image at natural size */}
      <Image 
        source={require('../assets/images/header-logo.png')} 
        style={styles.logoImage}
      />
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
  logoImage: {
    // Image displays at its natural size
    // No size constraints - uses actual image dimensions
  },
});
