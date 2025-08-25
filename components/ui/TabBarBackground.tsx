import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabBarBackground() {
  const backgroundColor = useThemeColor({}, 'background');
  
  return (
    <BlurView
      // System chrome material automatically adapts to the system's theme
      // and creates a semi-transparent effect.
      tint="systemChromeMaterial"
      intensity={100}
      style={[StyleSheet.absoluteFill, { backgroundColor }]}
    />
  );
}
