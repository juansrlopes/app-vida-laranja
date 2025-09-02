import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Tab bar colors - orange inactive, black active on white background
        tabBarActiveTintColor: Colors.tabIconSelected, // Black for selected tab
        tabBarInactiveTintColor: Colors.tabIconDefault, // Orange for unselected tabs
        headerShown: false, // Headers handled by parent drawer navigator
        // Tab bar styling
        tabBarStyle: {
          backgroundColor: Colors.background, // White background
          borderTopWidth: 1, // Subtle border for definition
          borderTopColor: 'rgba(0,0,0,0.1)', // Light gray border
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      {/* Main app features - always visible in tab bar */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="top5"
        options={{
          title: 'Top 5',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="trophy.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="wrench.and.screwdriver" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="info.circle" color={color} />
          ),
        }}
      />

      {/* Secondary screens - accessible via drawer, hidden from tab bar */}
      {/* Architecture: These are tab screens with href:null to keep tabs visible when navigating from drawer */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help & Support',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="recommendations"
        options={{
          title: 'Recommendations',
          href: null, // Hide from tab bar - accessible via drawer
        }}
      />
      <Tabs.Screen
        name="category-detail"
        options={{
          title: 'Category Detail',
          href: null, // Hide from tab bar - accessible via Top 5 navigation
        }}
      />
    </Tabs>
  );
}
