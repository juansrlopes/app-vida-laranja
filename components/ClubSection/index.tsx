import { Colors, Typography } from '@/constants';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ClubSectionProps {
  title?: string;
  cardTitle?: string;
  cardSubtitle?: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

export default function ClubSection({
  title = 'Club',
  cardTitle = 'Join Our Community',
  cardSubtitle = 'Connect with like-minded people and discover amazing experiences',
  buttonText = 'Go to',
  onButtonPress,
}: ClubSectionProps) {
  const handleButtonPress = () => {
    console.log('Club button pressed');
    onButtonPress?.();
  };

  return (
    <View style={styles.container}>
      {/* Section Title */}
      <View style={styles.headerContainer}>
        <Text style={[styles.sectionTitle, { color: Colors.text }]}>
          {title}
        </Text>
      </View>

      {/* Club Card */}
      <View style={styles.cardContainer}>
        <View style={[styles.clubCard, { backgroundColor: Colors.tint }]}>
          {/* Card Content */}
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{cardTitle}</Text>
            <Text style={styles.cardSubtitle}>{cardSubtitle}</Text>
          </View>

          {/* CTA Button */}
          <Pressable
            style={styles.ctaButton}
            onPress={handleButtonPress}
            android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
          >
            <Text style={styles.ctaButtonText}>{buttonText}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: Typography.h2,
  cardContainer: {
    paddingHorizontal: 20,
  },
  clubCard: {
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  cardContent: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    // fontFamily: 'Inter-Bold', // TODO: Uncomment when font is available
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    lineHeight: 22,
    // fontFamily: 'Inter-Regular', // TODO: Uncomment when font is available
  },
  ctaButton: {
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    alignSelf: 'center',
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    // fontFamily: 'Inter-Bold', // TODO: Uncomment when font is available
  },
});
