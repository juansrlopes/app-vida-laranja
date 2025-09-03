import { TextStyle } from 'react-native';
import { Colors } from './Colors';
import { FontFamilies, FontSizes, FontWeights, LineHeights } from './Fonts';

// Predefined typography styles to ensure consistency across the app
// Use these instead of defining font styles in individual components

export const Typography = {
  // Headers
  h1: {
    fontFamily: FontFamilies.harmoni,
    fontSize: FontSizes.h1,
    fontWeight: FontWeights.bold,
    lineHeight: FontSizes.h1 * LineHeights.tight,
    color: Colors.text,
  } as TextStyle,

  h2: {
    fontFamily: FontFamilies.harmoni,
    fontSize: FontSizes.h2,
    fontWeight: FontWeights.bold,
    lineHeight: FontSizes.h2 * LineHeights.tight,
    color: Colors.text,
  } as TextStyle,

  h3: {
    fontFamily: FontFamilies.interBold,
    fontSize: FontSizes.h3,
    fontWeight: FontWeights.bold,
    lineHeight: FontSizes.h3 * LineHeights.normal,
    color: Colors.text,
  } as TextStyle,

  // Body text
  bodyLarge: {
    fontFamily: FontFamilies.interRegular,
    fontSize: FontSizes.large,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.large * LineHeights.normal,
    color: Colors.text,
  } as TextStyle,

  bodyMedium: {
    fontFamily: FontFamilies.interRegular,
    fontSize: FontSizes.medium,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.medium * LineHeights.normal,
    color: Colors.text,
  } as TextStyle,

  bodyRegular: {
    fontFamily: FontFamilies.interRegular,
    fontSize: FontSizes.regular,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.regular * LineHeights.normal,
    color: Colors.text,
  } as TextStyle,

  bodySmall: {
    fontFamily: FontFamilies.interRegular,
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.small * LineHeights.normal,
    color: Colors.text,
  } as TextStyle,

  // Emphasized text
  bodyMediumSemiBold: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: FontSizes.medium,
    fontWeight: FontWeights.semiBold,
    lineHeight: FontSizes.medium * LineHeights.normal,
    color: Colors.text,
  } as TextStyle,

  bodyRegularSemiBold: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: FontSizes.regular,
    fontWeight: FontWeights.semiBold,
    lineHeight: FontSizes.regular * LineHeights.normal,
    color: Colors.text,
  } as TextStyle,

  bodySmallSemiBold: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: FontSizes.small,
    fontWeight: FontWeights.semiBold,
    lineHeight: FontSizes.small * LineHeights.normal,
    color: Colors.text,
  } as TextStyle,

  // Buttons
  button: {
    fontFamily: FontFamilies.interBold,
    fontSize: FontSizes.button,
    fontWeight: FontWeights.semiBold,
    color: Colors.text,
  } as TextStyle,

  buttonSmall: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: FontSizes.buttonSmall,
    fontWeight: FontWeights.semiBold,
    color: Colors.text,
  } as TextStyle,

  // Special cases
  subtitle: {
    fontFamily: FontFamilies.interRegular,
    fontSize: FontSizes.regular,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.regular * LineHeights.relaxed,
    color: Colors.text,
    opacity: 0.7,
  } as TextStyle,

  caption: {
    fontFamily: FontFamilies.interRegular,
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.small * LineHeights.normal,
    color: Colors.text,
    opacity: 0.7,
  } as TextStyle,
} as const;
