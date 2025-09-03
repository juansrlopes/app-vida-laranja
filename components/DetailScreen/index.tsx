import { Colors, Typography } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';

// Generic detail item interface
export interface DetailItem {
  id: string;
  image: any;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

// Info card data structure
export interface InfoCard {
  icon: string;
  label: string;
  value: string | string[];
}

// Action button data structure
export interface ActionButton {
  label: string;
  onPress: () => void;
  isPrimary?: boolean;
}

// Additional detail row data structure
export interface DetailRow {
  label: string;
  value: string;
}

// Contact information structure
export interface ContactInfo {
  phone?: string;
  website?: string;
  email?: string;
}

interface DetailScreenProps {
  item: DetailItem | null;
  notFoundMessage: string;
  aboutTitle: string;
  infoCards: InfoCard[];
  detailRows?: DetailRow[];
  additionalSections?: {
    title: string;
    content: React.ReactNode;
  }[];
  contactInfo?: ContactInfo;
  actionButtons: ActionButton[];
  rating?: {
    value: number;
    reviews: number;
  };
}

// Reusable detail screen component
// Can be used for events, services, or any other detail views
// Provides consistent layout with image on top and detailed information below
export default function DetailScreen({
  item,
  notFoundMessage,
  aboutTitle,
  infoCards,
  detailRows = [],
  additionalSections = [],
  contactInfo,
  actionButtons,
  rating,
}: DetailScreenProps) {
  if (!item) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={[Typography.h2, { color: Colors.text }]}>
          {notFoundMessage}
        </Text>
        <Pressable
          style={[styles.backButton, { backgroundColor: Colors.tint }]}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const handleBackPress = () => {
    router.back();
  };

  const handleCallPress = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleWebsitePress = (website: string) => {
    const url = website.startsWith('http') ? website : `https://${website}`;
    Linking.openURL(url);
  };

  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero Image */}
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <Pressable style={styles.backButtonOverlay} onPress={handleBackPress}>
          <IconSymbol name="chevron.left" size={24} color="#fff" />
        </Pressable>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Title and Subtitle */}
        <View style={styles.headerSection}>
          <Text style={[Typography.h1, { color: Colors.text }]}>
            {item.title}
          </Text>
          <Text
            style={[Typography.subtitle, { color: Colors.text, marginTop: 8 }]}
          >
            {item.subtitle}
          </Text>

          {/* Rating (if provided) */}
          {rating && (
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingStars}>
                {'⭐'.repeat(Math.floor(rating.value))}
              </Text>
              <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
                {rating.value} ({rating.reviews} reviews)
              </Text>
            </View>
          )}
        </View>

        {/* Info Cards */}
        <View style={styles.infoCardsContainer}>
          {infoCards.map((card, index) => (
            <View key={index} style={styles.infoCard}>
              <Text style={styles.infoCardIcon}>{card.icon}</Text>
              <View style={styles.infoCardContent}>
                <Text
                  style={[Typography.bodySmallSemiBold, { color: Colors.text }]}
                >
                  {card.label}
                </Text>
                {Array.isArray(card.value) ? (
                  card.value.map((val, idx) => (
                    <Text
                      key={idx}
                      style={[Typography.bodySmall, { color: Colors.text }]}
                    >
                      {val}
                    </Text>
                  ))
                ) : (
                  <Text style={[Typography.bodySmall, { color: Colors.text }]}>
                    {card.value}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text
            style={[Typography.h3, { color: Colors.text, marginBottom: 12 }]}
          >
            {aboutTitle}
          </Text>
          <Text
            style={[
              Typography.bodyMedium,
              { color: Colors.text, lineHeight: 24 },
            ]}
          >
            {item.description}
          </Text>
        </View>

        {/* Detail Rows (if provided) */}
        {detailRows.length > 0 && (
          <View style={styles.section}>
            <Text
              style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}
            >
              Details
            </Text>
            {detailRows.map((row, index) => (
              <View key={index} style={styles.detailRow}>
                <Text
                  style={[
                    Typography.bodyMediumSemiBold,
                    { color: Colors.text },
                  ]}
                >
                  {row.label}:
                </Text>
                <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
                  {row.value}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Additional Sections */}
        {additionalSections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text
              style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}
            >
              {section.title}
            </Text>
            {section.content}
          </View>
        ))}

        {/* Tags */}
        <View style={styles.section}>
          <Text
            style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}
          >
            Tags
          </Text>
          <View style={styles.tagsContainer}>
            {item.tags.map((tag, index) => (
              <View
                key={index}
                style={[styles.tag, { backgroundColor: Colors.lightOrange }]}
              >
                <Text style={[Typography.caption, { color: Colors.tint }]}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact Information (if provided) */}
        {contactInfo && (
          <View style={styles.section}>
            <Text
              style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}
            >
              Contact Information
            </Text>

            <View style={styles.contactCard}>
              {contactInfo.phone && (
                <Pressable
                  style={styles.contactItem}
                  onPress={() => handleCallPress(contactInfo.phone!)}
                >
                  <Text style={styles.contactIcon}>📞</Text>
                  <View style={styles.contactContent}>
                    <Text
                      style={[
                        Typography.bodyMediumSemiBold,
                        { color: Colors.text },
                      ]}
                    >
                      Phone
                    </Text>
                    <Text
                      style={[Typography.bodyMedium, { color: Colors.text }]}
                    >
                      {contactInfo.phone}
                    </Text>
                  </View>
                </Pressable>
              )}

              {contactInfo.website && (
                <Pressable
                  style={styles.contactItem}
                  onPress={() => handleWebsitePress(contactInfo.website!)}
                >
                  <Text style={styles.contactIcon}>🌐</Text>
                  <View style={styles.contactContent}>
                    <Text
                      style={[
                        Typography.bodyMediumSemiBold,
                        { color: Colors.text },
                      ]}
                    >
                      Website
                    </Text>
                    <Text
                      style={[Typography.bodyMedium, { color: Colors.tint }]}
                    >
                      {contactInfo.website}
                    </Text>
                  </View>
                </Pressable>
              )}

              {contactInfo.email && (
                <Pressable
                  style={styles.contactItem}
                  onPress={() => handleEmailPress(contactInfo.email!)}
                >
                  <Text style={styles.contactIcon}>📧</Text>
                  <View style={styles.contactContent}>
                    <Text
                      style={[
                        Typography.bodyMediumSemiBold,
                        { color: Colors.text },
                      ]}
                    >
                      Email
                    </Text>
                    <Text
                      style={[Typography.bodyMedium, { color: Colors.tint }]}
                    >
                      {contactInfo.email}
                    </Text>
                  </View>
                </Pressable>
              )}
            </View>
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          {actionButtons.map((button, index) => (
            <Pressable
              key={index}
              style={[
                button.isPrimary
                  ? styles.primaryButton
                  : styles.secondaryButton,
                button.isPrimary ? { backgroundColor: Colors.tint } : {},
              ]}
              onPress={button.onPress}
            >
              <Text
                style={[
                  button.isPrimary
                    ? styles.primaryButtonText
                    : styles.secondaryButtonText,
                  !button.isPrimary ? { color: Colors.tint } : {},
                ]}
              >
                {button.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  backButtonOverlay: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  contentContainer: {
    padding: 20,
  },
  headerSection: {
    marginBottom: 24,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  ratingStars: {
    fontSize: 16,
  },
  infoCardsContainer: {
    marginBottom: 24,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  infoCardIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  infoCardContent: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  contactContent: {
    flex: 1,
  },
  actionsContainer: {
    marginTop: 12,
    gap: 12,
  },
  primaryButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    ...Typography.button,
    color: '#fff',
  },
  secondaryButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.tint,
  },
  secondaryButtonText: {
    ...Typography.button,
  },
  backButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  backButtonText: {
    ...Typography.button,
    color: '#fff',
  },
});
