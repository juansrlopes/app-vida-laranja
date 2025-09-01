// Cross-platform icon component
// Uses SF Symbols on iOS, MaterialIcons on Android/Web

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

// Maps SF Symbol names to Material Icon names
const MAPPING = {
  // Navigation icons
  'house.fill': 'home',
  'calendar': 'event',
  'info.circle': 'info',
  'star.fill': 'star',
  'wrench.and.screwdriver': 'build',
  
  // User/settings icons
  'person.circle': 'account-circle',
  'gear': 'settings',
  'bell': 'notifications',
  'questionmark.circle': 'help',
  
  // Action icons
  'xmark': 'close',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
