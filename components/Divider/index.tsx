import React from 'react';
import { StyleSheet, View } from 'react-native';

interface DividerProps {
  color?: string;
  thickness?: number;
  marginVertical?: number;
}

export default function Divider({
  color = 'rgba(0,0,0,0.1)',
  thickness = 1,
  marginVertical = 20,
}: DividerProps) {
  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: color,
          height: thickness,
          marginVertical: marginVertical,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});
