import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { Colors } from '@/constants/Colors';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.text,
        drawerStyle: {
          backgroundColor: Colors.background,
        },
        drawerActiveTintColor: Colors.tint,
        drawerInactiveTintColor: Colors.icon,
      }}>

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
