import { Colors, Typography } from '@/constants';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { mockUser } from '../../../assets/data';

// Profile screen UI component
// Displays user information, stats, and account details
export default function ProfileScreen() {
  const handleEditProfile = () => {
    console.log('Edit profile pressed');
  };

  const handleViewFavorites = () => {
    console.log('View favorites pressed');
  };

  const handleViewReviews = () => {
    console.log('View reviews pressed');
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header */}
      <View style={styles.headerContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={mockUser.profileImage}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        <Text
          style={[
            Typography.h2,
            { color: Colors.text, textAlign: 'center', marginTop: 16 },
          ]}
        >
          {mockUser.name}
        </Text>

        <Text
          style={[
            Typography.subtitle,
            { color: Colors.text, textAlign: 'center' },
          ]}
        >
          {mockUser.email}
        </Text>

        <View style={styles.locationContainer}>
          <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
            📍 {mockUser.location}
          </Text>
        </View>

        <Pressable
          style={[styles.editButton, { backgroundColor: Colors.tint }]}
          onPress={handleEditProfile}
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </Pressable>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Your Stats
        </Text>

        <View style={styles.statsRow}>
          <Pressable style={styles.statCard} onPress={handleViewReviews}>
            <Text style={[Typography.h2, { color: Colors.tint }]}>
              {mockUser.totalReviews}
            </Text>
            <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
              Reviews
            </Text>
          </Pressable>

          <Pressable style={styles.statCard} onPress={handleViewFavorites}>
            <Text style={[Typography.h2, { color: Colors.tint }]}>
              {mockUser.totalFavorites}
            </Text>
            <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
              Favorites
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Account Info */}
      <View style={styles.infoContainer}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Account Information
        </Text>

        <View style={styles.infoItem}>
          <Text style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}>
            Member Since
          </Text>
          <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
            {mockUser.memberSince}
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}>
            Favorite Categories
          </Text>
          <View style={styles.categoriesContainer}>
            {mockUser.favoriteCategories.map((category, index) => (
              <View
                key={index}
                style={[
                  styles.categoryTag,
                  { backgroundColor: Colors.lightOrange },
                ]}
              >
                <Text style={[Typography.caption, { color: Colors.tint }]}>
                  {category}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Quick Actions
        </Text>

        <Pressable style={styles.actionButton} onPress={handleViewFavorites}>
          <Text style={styles.actionEmoji}>⭐</Text>
          <View style={styles.actionContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              My Favorites
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              View your saved places
            </Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </Pressable>

        <Pressable style={styles.actionButton} onPress={handleViewReviews}>
          <Text style={styles.actionEmoji}>📝</Text>
          <View style={styles.actionContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              My Reviews
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              See your reviews and ratings
            </Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </Pressable>
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
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.lightOrange,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  locationContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
  editButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  editButtonText: {
    ...Typography.bodyMediumSemiBold,
    color: '#fff',
  },
  statsContainer: {
    marginBottom: 30,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoItem: {
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  categoryTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  actionsContainer: {
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  actionEmoji: {
    fontSize: 24,
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionArrow: {
    fontSize: 20,
    color: Colors.text,
    opacity: 0.3,
  },
});
