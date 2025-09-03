// Spacing constants for consistent layout across the app
// Use these instead of hardcoded values to maintain design consistency

export const Spacing = {
  // Base spacing unit (4px)
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,

  // Component-specific spacing
  sectionVertical: 20,
  sectionHorizontal: 20,
  cardPadding: 16,
  buttonPadding: 12,
  itemGap: 12,

  // Margins
  marginSmall: 8,
  marginMedium: 16,
  marginLarge: 24,
} as const;

// Border radius constants
export const BorderRadius = {
  small: 8,
  medium: 12,
  large: 16,
  pill: 20,
  round: 25,
} as const;

// Shadow presets for consistent elevation
export const Shadows = {
  small: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  medium: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },

  large: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
} as const;
