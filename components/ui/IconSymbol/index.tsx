// Cross-platform icon component
// Uses SF Symbols on iOS, MaterialIcons on Android/Web

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { ColorValue, StyleProp, TextStyle } from 'react-native';

type SymbolName = Extract<
  import('expo-symbols').SymbolViewProps['name'],
  string
>;

// Maps SF Symbol names to Material Icon names
const MAPPING = {
  // Navigation icons
  'house.fill': 'home',
  calendar: 'event',
  'info.circle': 'info',
  'star.fill': 'star',
  'wrench.and.screwdriver': 'build',
  'trophy.fill': 'emoji-events',

  // User/settings icons
  'person.circle': 'account-circle',
  gear: 'settings',
  bell: 'notifications',
  'questionmark.circle': 'help',

  // Action icons
  xmark: 'close',
  map: 'map',
  'chevron.left': 'arrow-back',
} as Partial<
  Record<SymbolName, React.ComponentProps<typeof MaterialIcons>['name']>
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
  color: ColorValue | null;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialIcons
      color={typeof color === 'number' || color == null ? undefined : color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
