// Font family constants
// Centralized font definitions to avoid repetition across components

export const FontFamilies = {
  // Header and branding font
  harmoni: 'Harmoni',

  // Inter font family for body text
  interRegular: 'Inter-Regular',
  interMedium: 'Inter-Medium',
  interSemiBold: 'Inter-SemiBold',
  interBold: 'Inter-Bold',
  interLight: 'Inter-Light',
} as const;

// Typography scale with consistent font sizes
export const FontSizes = {
  // Headers
  h1: 32,
  h2: 24,
  h3: 20,

  // Body text
  large: 18,
  medium: 16,
  regular: 14,
  small: 12,

  // Buttons
  button: 16,
  buttonSmall: 14,
} as const;

// Font weights
export const FontWeights = {
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
} as const;

// Line heights for better readability
export const LineHeights = {
  tight: 1.2,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
} as const;
