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
import { mockNotifications, NotificationItem } from '../../../assets/data';

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
