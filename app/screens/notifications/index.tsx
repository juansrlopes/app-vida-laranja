import { Colors, Typography } from '@/constants';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Mock notification data
interface NotificationItem {
  id: string;
  type: 'event' | 'recommendation' | 'system' | 'social';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

const mockNotifications: NotificationItem[] = [
  {
    id: '1',
    type: 'event',
    title: 'New Event: Jazz Night at Concertgebouw',
    message:
      "A special jazz performance is happening tonight at 8 PM. Don't miss out!",
    timestamp: '2 hours ago',
    isRead: false,
  },
  {
    id: '2',
    type: 'recommendation',
    title: 'New Restaurant Recommendation',
    message:
      'Check out "De Kas" - a highly rated restaurant that matches your preferences.',
    timestamp: '5 hours ago',
    isRead: false,
  },
  {
    id: '3',
    type: 'social',
    title: 'Your review was liked',
    message:
      'Someone liked your review of "Café de Reiger". Keep sharing your experiences!',
    timestamp: '1 day ago',
    isRead: true,
  },
  {
    id: '4',
    type: 'system',
    title: 'Profile Updated Successfully',
    message: 'Your profile information has been updated. Changes are now live.',
    timestamp: '2 days ago',
    isRead: true,
  },
  {
    id: '5',
    type: 'event',
    title: 'Food Festival This Weekend',
    message:
      'Amsterdam Food Festival is happening at Vondelpark. Discover amazing local cuisine!',
    timestamp: '3 days ago',
    isRead: true,
  },
  {
    id: '6',
    type: 'recommendation',
    title: 'Top 5 Update: New Burger Spots',
    message:
      "We've updated our Top 5 burger recommendations with some exciting new additions.",
    timestamp: '1 week ago',
    isRead: true,
  },
  {
    id: '7',
    type: 'system',
    title: 'Welcome to Vida Laranja!',
    message:
      "Thanks for joining us! Explore Amsterdam's best spots and start discovering.",
    timestamp: '2 weeks ago',
    isRead: true,
  },
];

// Notifications screen UI component
// Displays notification history and management options
export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const getNotificationIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'event':
        return '📅';
      case 'recommendation':
        return '⭐';
      case 'social':
        return '👥';
      case 'system':
        return '⚙️';
      default:
        return '📱';
    }
  };

  const getNotificationColor = (type: NotificationItem['type']) => {
    switch (type) {
      case 'event':
        return Colors.tint;
      case 'recommendation':
        return '#FFB800';
      case 'social':
        return '#4CAF50';
      case 'system':
        return '#757575';
      default:
        return Colors.text;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  const clearAllNotifications = () => {
    Alert.alert(
      'Clear All Notifications',
      'Are you sure you want to clear all notifications? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear All',
          style: 'destructive',
          onPress: () => setNotifications([]),
        },
      ]
    );
  };

  const handleNotificationPress = (notification: NotificationItem) => {
    if (!notification.isRead) {
      markAsRead(notification.id);
    }

    // Handle navigation based on notification type
    switch (notification.type) {
      case 'event':
        console.log('Navigate to events');
        break;
      case 'recommendation':
        console.log('Navigate to recommendations');
        break;
      default:
        console.log('Notification opened:', notification.title);
    }
  };

  const filteredNotifications =
    filter === 'unread'
      ? notifications.filter((n) => !n.isRead)
      : notifications;

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const renderNotificationItem = ({ item }: { item: NotificationItem }) => (
    <Pressable
      style={[
        styles.notificationItem,
        !item.isRead && styles.unreadNotification,
      ]}
      onPress={() => handleNotificationPress(item)}
    >
      <View style={styles.notificationHeader}>
        <View style={styles.notificationIconContainer}>
          <Text style={styles.notificationIcon}>
            {getNotificationIcon(item.type)}
          </Text>
          {!item.isRead && <View style={styles.unreadDot} />}
        </View>

        <View style={styles.notificationContent}>
          <Text
            style={[
              Typography.bodyMediumSemiBold,
              { color: Colors.text },
              !item.isRead && { color: Colors.tint },
            ]}
            numberOfLines={2}
          >
            {item.title}
          </Text>

          <Text
            style={[
              Typography.bodyMedium,
              { color: Colors.text, marginTop: 4, lineHeight: 20 },
            ]}
            numberOfLines={3}
          >
            {item.message}
          </Text>

          <Text
            style={[
              Typography.caption,
              { color: Colors.text, opacity: 0.6, marginTop: 8 },
            ]}
          >
            {item.timestamp}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateEmoji}>🔔</Text>
      <Text
        style={[Typography.h3, { color: Colors.text, textAlign: 'center' }]}
      >
        {filter === 'unread' ? 'No Unread Notifications' : 'No Notifications'}
      </Text>
      <Text
        style={[
          Typography.bodyMedium,
          { color: Colors.text, textAlign: 'center', marginTop: 8 },
        ]}
      >
        {filter === 'unread'
          ? 'All caught up! Check back later for updates.'
          : "You'll see your notifications here when you receive them."}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={[Typography.h2, { color: Colors.text }]}>
            Notifications
          </Text>
          {unreadCount > 0 && (
            <View style={[styles.badge, { backgroundColor: Colors.tint }]}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>

        {notifications.length > 0 && (
          <View style={styles.headerActions}>
            <Pressable
              style={styles.headerButton}
              onPress={() => setFilter(filter === 'all' ? 'unread' : 'all')}
            >
              <Text style={[Typography.bodyMedium, { color: Colors.tint }]}>
                {filter === 'all' ? 'Show Unread' : 'Show All'}
              </Text>
            </Pressable>

            {unreadCount > 0 && (
              <Pressable style={styles.headerButton} onPress={markAllAsRead}>
                <Text style={[Typography.bodyMedium, { color: Colors.tint }]}>
                  Mark All Read
                </Text>
              </Pressable>
            )}

            <Pressable
              style={styles.headerButton}
              onPress={clearAllNotifications}
            >
              <Text style={[Typography.bodyMedium, { color: '#ff4444' }]}>
                Clear All
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* Notifications List */}
      <FlatList
        data={filteredNotifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyState}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  badge: {
    marginLeft: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 24,
    alignItems: 'center',
  },
  badgeText: {
    ...Typography.caption,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  headerButton: {
    paddingVertical: 4,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
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
  unreadNotification: {
    borderLeftWidth: 4,
    borderLeftColor: Colors.tint,
    elevation: 2,
    shadowOpacity: 0.1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  notificationIconContainer: {
    position: 'relative',
    marginRight: 12,
    marginTop: 2,
  },
  notificationIcon: {
    fontSize: 20,
  },
  unreadDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.tint,
  },
  notificationContent: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
});
