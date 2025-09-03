import { Colors, Typography } from '@/constants';
import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

// Mock settings data
const mockSettings = {
  notifications: {
    pushNotifications: true,
    emailUpdates: false,
    eventReminders: true,
    newRecommendations: true,
  },
  preferences: {
    language: 'English',
    currency: 'EUR (€)',
    distanceUnit: 'Kilometers',
  },
  privacy: {
    shareLocation: true,
    publicProfile: false,
    dataCollection: true,
  },
};

// Settings screen UI component
// Displays app configuration options and user preferences
export default function SettingsScreen() {
  const [settings, setSettings] = useState(mockSettings);

  const updateNotificationSetting = (
    key: keyof typeof settings.notifications,
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      },
    }));
  };

  const updatePrivacySetting = (
    key: keyof typeof settings.privacy,
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value,
      },
    }));
  };

  const handleLanguagePress = () => {
    Alert.alert('Language', 'Language selection coming soon!');
  };

  const handleCurrencyPress = () => {
    Alert.alert('Currency', 'Currency selection coming soon!');
  };

  const handleDistancePress = () => {
    Alert.alert('Distance Unit', 'Distance unit selection coming soon!');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => console.log('Logout'),
      },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'This action cannot be undone. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => console.log('Delete account'),
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
      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Notifications
        </Text>

        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Push Notifications
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Receive notifications on your device
            </Text>
          </View>
          <Switch
            value={settings.notifications.pushNotifications}
            onValueChange={(value) =>
              updateNotificationSetting('pushNotifications', value)
            }
            trackColor={{ false: '#767577', true: Colors.lightOrange }}
            thumbColor={
              settings.notifications.pushNotifications ? Colors.tint : '#f4f3f4'
            }
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Email Updates
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Get updates via email
            </Text>
          </View>
          <Switch
            value={settings.notifications.emailUpdates}
            onValueChange={(value) =>
              updateNotificationSetting('emailUpdates', value)
            }
            trackColor={{ false: '#767577', true: Colors.lightOrange }}
            thumbColor={
              settings.notifications.emailUpdates ? Colors.tint : '#f4f3f4'
            }
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Event Reminders
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Remind me about upcoming events
            </Text>
          </View>
          <Switch
            value={settings.notifications.eventReminders}
            onValueChange={(value) =>
              updateNotificationSetting('eventReminders', value)
            }
            trackColor={{ false: '#767577', true: Colors.lightOrange }}
            thumbColor={
              settings.notifications.eventReminders ? Colors.tint : '#f4f3f4'
            }
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              New Recommendations
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Notify me about new recommendations
            </Text>
          </View>
          <Switch
            value={settings.notifications.newRecommendations}
            onValueChange={(value) =>
              updateNotificationSetting('newRecommendations', value)
            }
            trackColor={{ false: '#767577', true: Colors.lightOrange }}
            thumbColor={
              settings.notifications.newRecommendations
                ? Colors.tint
                : '#f4f3f4'
            }
          />
        </View>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Preferences
        </Text>

        <Pressable style={styles.settingButton} onPress={handleLanguagePress}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Language
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              {settings.preferences.language}
            </Text>
          </View>
          <Text style={styles.settingArrow}>›</Text>
        </Pressable>

        <Pressable style={styles.settingButton} onPress={handleCurrencyPress}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Currency
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              {settings.preferences.currency}
            </Text>
          </View>
          <Text style={styles.settingArrow}>›</Text>
        </Pressable>

        <Pressable style={styles.settingButton} onPress={handleDistancePress}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Distance Unit
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              {settings.preferences.distanceUnit}
            </Text>
          </View>
          <Text style={styles.settingArrow}>›</Text>
        </Pressable>
      </View>

      {/* Privacy Section */}
      <View style={styles.section}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Privacy & Security
        </Text>

        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Share Location
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Allow location-based recommendations
            </Text>
          </View>
          <Switch
            value={settings.privacy.shareLocation}
            onValueChange={(value) =>
              updatePrivacySetting('shareLocation', value)
            }
            trackColor={{ false: '#767577', true: Colors.lightOrange }}
            thumbColor={
              settings.privacy.shareLocation ? Colors.tint : '#f4f3f4'
            }
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Public Profile
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Make your profile visible to others
            </Text>
          </View>
          <Switch
            value={settings.privacy.publicProfile}
            onValueChange={(value) =>
              updatePrivacySetting('publicProfile', value)
            }
            trackColor={{ false: '#767577', true: Colors.lightOrange }}
            thumbColor={
              settings.privacy.publicProfile ? Colors.tint : '#f4f3f4'
            }
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Text
              style={[Typography.bodyMediumSemiBold, { color: Colors.text }]}
            >
              Data Collection
            </Text>
            <Text style={[Typography.caption, { color: Colors.text }]}>
              Help improve the app with usage data
            </Text>
          </View>
          <Switch
            value={settings.privacy.dataCollection}
            onValueChange={(value) =>
              updatePrivacySetting('dataCollection', value)
            }
            trackColor={{ false: '#767577', true: Colors.lightOrange }}
            thumbColor={
              settings.privacy.dataCollection ? Colors.tint : '#f4f3f4'
            }
          />
        </View>
      </View>

      {/* Account Actions */}
      <View style={styles.section}>
        <Text style={[Typography.h3, { color: Colors.text, marginBottom: 16 }]}>
          Account
        </Text>

        <Pressable style={styles.actionButton} onPress={handleLogout}>
          <Text style={[Typography.bodyMediumSemiBold, { color: Colors.tint }]}>
            Logout
          </Text>
        </Pressable>

        <Pressable style={styles.actionButton} onPress={handleDeleteAccount}>
          <Text style={[Typography.bodyMediumSemiBold, { color: '#ff4444' }]}>
            Delete Account
          </Text>
        </Pressable>
      </View>

      {/* App Info */}
      <View style={styles.footer}>
        <Text
          style={[
            Typography.caption,
            { color: Colors.text, textAlign: 'center' },
          ]}
        >
          Vida Laranja v1.0.0
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
  section: {
    marginBottom: 32,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  settingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  settingContent: {
    flex: 1,
  },
  settingArrow: {
    fontSize: 20,
    color: Colors.text,
    opacity: 0.3,
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
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
  footer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
});
