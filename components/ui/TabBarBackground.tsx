import { Colors } from '@/constants/Colors';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

export default function TabBarBackground() {
  return (
    <BlurView
      tint="light"
      intensity={100}
      style={[StyleSheet.absoluteFill, { backgroundColor: Colors.background }]}
    />
  );
}
