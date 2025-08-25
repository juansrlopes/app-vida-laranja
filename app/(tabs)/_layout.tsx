import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { Tabs, router } from 'expo-router';
import React from 'react';
import { Platform, Pressable } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tabIconSelected,
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.text,
        headerLeft: () => (
          <Pressable
            onPress={() => router.push('/(drawer)/profile')}
            style={{ marginLeft: 16 }}
          >
            <IconSymbol name="person.circle" size={24} color={Colors.tint} />
          </Pressable>
        ),
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="info.circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="recommendations"
        options={{
          title: 'Recommendations',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="star.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="wrench.and.screwdriver" color={color} />,
        }}
      />
    </Tabs>
  );
}
