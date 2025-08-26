import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tabIconSelected, // Black for active tab text/icons
        tabBarInactiveTintColor: Colors.tabIconDefault, // White for inactive tab text/icons
        headerShown: true, // Show headers for each tab
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.text,
        headerTitleStyle: {
          fontFamily: 'OldStandardTT-Bold', // Custom font for tab headers
          fontSize: 20,
        },
        headerLeft: () => <DrawerToggleButton tintColor={Colors.tint} />, // Drawer access from tabs
        tabBarStyle: {
          backgroundColor: Colors.tint, // Orange tab bar background
          borderTopWidth: 0, // Remove top border for cleaner look
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      {/* Main app features - always visible in tab bar */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          headerTitle: 'Events',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerTitle: 'About',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="info.circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="recommendations"
        options={{
          title: 'Recommendations',
          headerTitle: 'Recommendations',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="star.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          headerTitle: 'Services',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="wrench.and.screwdriver" color={color} />,
        }}
      />
      
      {/* Drawer screens - hidden from tab bar but accessible via drawer */}
      {/* This keeps tabs always visible when navigating via drawer */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerTitle: 'Profile',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerTitle: 'Settings',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          headerTitle: 'Notifications',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help & Support',
          headerTitle: 'Help & Support',
          href: null, // Hide from tab bar
        }}
      />
    </Tabs>
  );
}
