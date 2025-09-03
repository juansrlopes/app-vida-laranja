import { Colors } from '@/constants';
import React from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';

interface ScreenContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  showsVerticalScrollIndicator?: boolean;
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
}

// Reusable screen container component
// Provides consistent layout and styling across all screens
export default function ScreenContainer({
  children,
  scrollable = false,
  showsVerticalScrollIndicator = false,
  contentContainerStyle,
  style,
}: ScreenContainerProps) {
  const containerStyle = [
    styles.container,
    { backgroundColor: Colors.background },
    style,
  ];

  if (scrollable) {
    return (
      <ScrollView
        style={containerStyle}
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      >
        {children}
      </ScrollView>
    );
  }

  return <View style={containerStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
