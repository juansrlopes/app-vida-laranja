import { ViewStyle } from 'react-native';
import { Colors } from './Colors';
import { BorderRadius, Shadows, Spacing } from './Spacing';

// Common style patterns used across multiple components
// Use these to avoid repetition and ensure consistency

export const CommonStyles = {
  // Container styles
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  } as ViewStyle,

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  } as ViewStyle,

  sectionContainer: {
    marginVertical: Spacing.sectionVertical,
  } as ViewStyle,

  // Card styles
  card: {
    backgroundColor: '#fff',
    borderRadius: BorderRadius.medium,
    padding: Spacing.cardPadding,
    ...Shadows.small,
  } as ViewStyle,

  cardMedium: {
    backgroundColor: '#fff',
    borderRadius: BorderRadius.medium,
    padding: Spacing.cardPadding,
    ...Shadows.medium,
  } as ViewStyle,

  cardLarge: {
    backgroundColor: '#fff',
    borderRadius: BorderRadius.large,
    padding: Spacing.xl,
    ...Shadows.medium,
  } as ViewStyle,

  // Header styles
  sectionHeader: {
    paddingHorizontal: Spacing.sectionHorizontal,
    marginBottom: Spacing.lg,
  } as ViewStyle,

  sectionHeaderWithButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.sectionHorizontal,
    marginBottom: Spacing.lg,
  } as ViewStyle,

  // Button styles
  primaryButton: {
    backgroundColor: Colors.tint,
    paddingHorizontal: Spacing.xxl,
    paddingVertical: Spacing.buttonPadding,
    borderRadius: BorderRadius.round,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  secondaryButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  pillButton: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  // Layout helpers
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,

  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  column: {
    flexDirection: 'column',
  } as ViewStyle,

  // Grid styles
  gridRow: {
    flexDirection: 'row',
    gap: Spacing.itemGap,
  } as ViewStyle,

  gridItem: {
    flex: 1,
  } as ViewStyle,

  // Image styles
  imageContainer: {
    borderRadius: BorderRadius.small,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  } as ViewStyle,

  fullWidthImage: {
    width: '100%',
    height: '100%',
  } as ViewStyle,

  // Padding helpers
  paddingHorizontal: {
    paddingHorizontal: Spacing.sectionHorizontal,
  } as ViewStyle,

  paddingVertical: {
    paddingVertical: Spacing.sectionVertical,
  } as ViewStyle,

  padding: {
    padding: Spacing.lg,
  } as ViewStyle,
} as const;
