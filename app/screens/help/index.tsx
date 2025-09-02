import { Colors, Typography } from '@/constants';
import React, { useState } from 'react';
import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Mock FAQ data
const faqData = [
  {
    id: '1',
    question: 'How do I find the best restaurants in Amsterdam?',
    answer:
      'Use our Top 5 section to discover the most popular categories like burgers, fries, and coffee. You can also browse our curated recommendations and check out local events for food festivals.',
  },
  {
    id: '2',
    question: 'How do I save my favorite places?',
    answer:
      'Tap the heart icon on any restaurant or location to add it to your favorites. You can view all your saved places in your Profile under "My Favorites".',
  },
  {
    id: '3',
    question: 'Can I get notifications for new events?',
    answer:
      'Yes! Go to Settings > Notifications and enable "Event Reminders" and "New Recommendations" to stay updated on the latest happenings in Amsterdam.',
  },
  {
    id: '4',
    question: 'How do I change my location preferences?',
    answer:
      'Visit Settings > Privacy & Security and toggle "Share Location" to enable location-based recommendations. You can also change your distance unit in Preferences.',
  },
  {
    id: '5',
    question: 'Is my data secure?',
    answer:
      'Absolutely! We take your privacy seriously. You can control data collection and profile visibility in Settings > Privacy & Security. We never share your personal information without consent.',
  },
  {
    id: '6',
    question: 'How do I report a problem with a listing?',
    answer:
      "Contact us through the support options below, and we'll investigate any issues with restaurant information or reviews promptly.",
  },
];

// Help & Support screen UI component
// Provides FAQ, contact options, and user guides
export default function HelpScreen() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleEmailSupport = () => {
    Linking.openURL('mailto:support@vidalaranja.com?subject=Help Request');
  };

  const handleWhatsAppSupport = () => {
    Linking.openURL(
      'https://wa.me/31612345678?text=Hi, I need help with Vida Laranja app'
    );
  };

  const handleWebsiteHelp = () => {
    Linking.openURL('https://www.vidalaranja.com/help');
  };

  const handleReportBug = () => {
    Alert.alert(
      'Report a Bug',
      'Thank you for helping us improve! Please describe the issue you encountered.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Send Email',
          onPress: () =>
            Linking.openURL('mailto:bugs@vidalaranja.com?subject=Bug Report'),
        },
      ]
    );
  };

  const handleFeatureRequest = () => {
    Alert.alert(
      'Feature Request',
      'We love hearing your ideas! What feature would you like to see?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Send Email',
          onPress: () =>
            Linking.openURL(
              'mailto:feedback@vidalaranja.com?subject=Feature Request'
            ),
        },
      ]
    );
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text
          style={[Typography.h2, { color: Colors.text, textAlign: 'center' }]}
        >
          How can we help you?
        </Text>
        <Text
          style={[
            Typography.bodyMedium,
            { color: Colors.text, textAlign: 'center', marginTop: 8 },
          ]}
        >
          Find answers to common questions or get in touch with our support team
        </Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Quick Help
        </Text>

        <View style={styles.quickActionsGrid}>
          <Pressable
            style={styles.quickActionCard}
            onPress={handleEmailSupport}
          >
            <Text style={styles.quickActionEmoji}>📧</Text>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Email Support
            </Text>
            <Text
              style={[
                Typography.caption,
                { color: Colors.text, textAlign: 'center' },
              ]}
            >
              Get help via email
            </Text>
          </Pressable>

          <Pressable
            style={styles.quickActionCard}
            onPress={handleWhatsAppSupport}
          >
            <Text style={styles.quickActionEmoji}>💬</Text>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              WhatsApp
            </Text>
            <Text
              style={[
                Typography.caption,
                { color: Colors.text, textAlign: 'center' },
              ]}
            >
              Chat with us
            </Text>
          </Pressable>
        </View>

        <View style={styles.quickActionsGrid}>
          <Pressable style={styles.quickActionCard} onPress={handleWebsiteHelp}>
            <Text style={styles.quickActionEmoji}>🌐</Text>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Help Center
            </Text>
            <Text
              style={[
                Typography.caption,
                { color: Colors.text, textAlign: 'center' },
              ]}
            >
              Visit our website
            </Text>
          </Pressable>

          <Pressable style={styles.quickActionCard} onPress={handleReportBug}>
            <Text style={styles.quickActionEmoji}>🐛</Text>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Report Bug
            </Text>
            <Text
              style={[
                Typography.caption,
                { color: Colors.text, textAlign: 'center' },
              ]}
            >
              Found an issue?
            </Text>
          </Pressable>
        </View>
      </View>

      {/* FAQ Section */}
      <View style={styles.section}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Frequently Asked Questions
        </Text>

        {faqData.map((faq) => (
          <View key={faq.id} style={styles.faqContainer}>
            <Pressable
              style={styles.faqQuestion}
              onPress={() => toggleFaq(faq.id)}
            >
              <Text
                style={[
                  Typography.bodyMediumSemiBold,
                  { color: Colors.text, flex: 1 },
                ]}
              >
                {faq.question}
              </Text>
              <Text style={[styles.faqArrow, { color: Colors.text }]}>
                {expandedFaq === faq.id ? '−' : '+'}
              </Text>
            </Pressable>

            {expandedFaq === faq.id && (
              <View style={styles.faqAnswer}>
                <Text
                  style={[
                    Typography.bodyMedium,
                    { color: Colors.text, lineHeight: 22 },
                  ]}
                >
                  {faq.answer}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Contact Information
        </Text>

        <View style={styles.contactCard}>
          <View style={styles.contactItem}>
            <Text style={styles.contactEmoji}>📧</Text>
            <View style={styles.contactContent}>
              <Text
                style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
              >
                Email Support
              </Text>
              <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
                support@vidalaranja.com
              </Text>
              <Text style={[Typography.caption, { color: Colors.text }]}>
                Response within 24 hours
              </Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactEmoji}>💬</Text>
            <View style={styles.contactContent}>
              <Text
                style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
              >
                WhatsApp Support
              </Text>
              <Text style={[Typography.bodyMedium, { color: Colors.text }]}>
                +31 6 1234 5678
              </Text>
              <Text style={[Typography.caption, { color: Colors.text }]}>
                Available 9 AM - 6 PM CET
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Additional Actions */}
      <View style={styles.section}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Feedback & Suggestions
        </Text>

        <Pressable style={styles.actionButton} onPress={handleFeatureRequest}>
          <Text style={styles.actionEmoji}>💡</Text>
          <View style={styles.actionContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Request a Feature
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Share your ideas with us
            </Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </Pressable>

        <Pressable
          style={styles.actionButton}
          onPress={() => Linking.openURL('https://www.vidalaranja.com/privacy')}
        >
          <Text style={styles.actionEmoji}>🔒</Text>
          <View style={styles.actionContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Privacy Policy
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Learn how we protect your data
            </Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </Pressable>

        <Pressable
          style={styles.actionButton}
          onPress={() => Linking.openURL('https://www.vidalaranja.com/terms')}
        >
          <Text style={styles.actionEmoji}>📋</Text>
          <View style={styles.actionContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Terms of Service
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Read our terms and conditions
            </Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
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
          Still need help? We're here for you! 🧡
        </Text>
        <Text
          style={[
            Typography.caption,
            { color: Colors.text, textAlign: 'center', marginTop: 4 },
          ]}
        >
          Vida Laranja Support Team
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
  headerContainer: {
    marginBottom: 30,
  },
  section: {
    marginBottom: 32,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  quickActionCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  quickActionEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  faqContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  faqArrow: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  faqAnswer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
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
    marginBottom: 16,
  },
  contactEmoji: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  contactContent: {
    flex: 1,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
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
    fontSize: 20,
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
  footer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
});
