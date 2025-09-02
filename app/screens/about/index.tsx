import { Colors, Typography } from '@/constants';
import * as Linking from 'expo-linking';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// About screen UI component
// Displays information about the Vida Laranja app and social links
export default function AboutScreen() {
  const handleWebsitePress = () => {
    Linking.openURL('https://www.vidalaranja.com/');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/vidalaranja/');
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* App Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/main-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* App Title */}
      <Text
        style={[Typography.h1, { color: Colors.tint, textAlign: 'center' }]}
      >
        Vida Laranja
      </Text>

      {/* App Description */}
      <View style={styles.descriptionContainer}>
        <Text
          style={[
            Typography.bodyLarge,
            { color: Colors.text, textAlign: 'center', marginBottom: 16 },
          ]}
        >
          Discover the best of Amsterdam through local eyes
        </Text>

        <Text
          style={[
            Typography.bodyMedium,
            { color: Colors.text, textAlign: 'center', lineHeight: 24 },
          ]}
        >
          Vida Laranja is your ultimate guide to Amsterdam's hidden gems and
          local favorites. From the best fries spots to cozy coffee shops, we
          help you explore the city like a true local.
        </Text>

        <Text
          style={[
            Typography.bodyMedium,
            {
              color: Colors.text,
              textAlign: 'center',
              lineHeight: 24,
              marginTop: 16,
            },
          ]}
        >
          Whether you're looking for the top restaurants, cultural events, or
          unique experiences, our curated recommendations will make your
          Amsterdam adventure unforgettable.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.featuresContainer}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          What You'll Find
        </Text>

        <View style={styles.featureItem}>
          <Text style={styles.featureEmoji}>🍟</Text>
          <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
            Top 5 lists of the best places in each category
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureEmoji}>📅</Text>
          <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
            Curated events and cultural activities
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureEmoji}>⭐</Text>
          <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
            Personal recommendations from locals
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureEmoji}>🗺️</Text>
          <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
            Interactive maps and location guides
          </Text>
        </View>
      </View>

      {/* Social Links */}
      <View style={styles.socialContainer}>
        <Text
          style={[
            Typography.h3,
            { color: Colors.text, marginBottom: 20, textAlign: 'center' },
          ]}
        >
          Connect With Us
        </Text>

        <Pressable
          style={[styles.socialButton, { backgroundColor: Colors.tint }]}
          onPress={handleWebsitePress}
        >
          <Text style={styles.socialButtonText}>🌐 Visit Our Website</Text>
          <Text style={[Typography.caption, { color: '#fff', opacity: 0.9 }]}>
            www.vidalaranja.com
          </Text>
        </Pressable>

        <Pressable
          style={[styles.socialButton, { backgroundColor: '#E4405F' }]}
          onPress={handleInstagramPress}
        >
          <Text style={styles.socialButtonText}>📷 Follow on Instagram</Text>
          <Text style={[Typography.caption, { color: '#fff', opacity: 0.9 }]}>
            @vidalaranja
          </Text>
        </Pressable>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text
          style={[
            Typography.caption,
            { color: Colors.text, textAlign: 'center' },
          ]}
        >
          Made with 🧡 in Amsterdam
        </Text>
        <Text
          style={[
            Typography.caption,
            { color: Colors.text, textAlign: 'center', marginTop: 4 },
          ]}
        >
          © 2025 Vida Laranja. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  descriptionContainer: {
    marginVertical: 30,
  },
  featuresContainer: {
    marginVertical: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureEmoji: {
    fontSize: 20,
    marginRight: 12,
    width: 30,
  },
  socialContainer: {
    marginVertical: 30,
  },
  socialButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  socialButtonText: {
    ...Typography.bodyMediumSemiBold,
    color: '#fff',
    marginBottom: 4,
  },
  footer: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
});
