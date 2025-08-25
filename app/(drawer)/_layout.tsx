import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        drawerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        drawerInactiveTintColor: Colors[colorScheme ?? 'light'].icon,
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Main App',
          title: 'Vida Laranja',
          drawerIcon: ({ color, size }) => (
            <IconSymbol name="house.fill" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
          drawerIcon: ({ color, size }) => (
            <IconSymbol name="person.circle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings',
          drawerIcon: ({ color, size }) => (
            <IconSymbol name="gear" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="notifications"
        options={{
          drawerLabel: 'Notifications',
          title: 'Notifications',
          drawerIcon: ({ color, size }) => (
            <IconSymbol name="bell" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          drawerLabel: 'Help & Support',
          title: 'Help & Support',
          drawerIcon: ({ color, size }) => (
            <IconSymbol name="questionmark.circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
