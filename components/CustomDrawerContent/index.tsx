import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

// Drawer navigation items - mix of primary and secondary navigation
const drawerItems = [
  {
    label: 'Home',
    route: '/(main)/(tabs)' as const, // Goes to tab navigation
    icon: 'house.fill' as const,
  },
  {
    label: 'Profile',
    route: '/(main)/(tabs)/profile' as const, // Hidden tab screen (keeps tabs visible)
    icon: 'person.circle' as const,
  },
  {
    label: 'Notifications',
    route: '/(main)/(tabs)/notifications' as const, // Hidden tab screen (keeps tabs visible)
    icon: 'bell' as const,
  },
  {
    label: 'Recommendations',
    route: '/(main)/(tabs)/recommendations' as const, // Hidden tab screen (keeps tabs visible)
    icon: 'star.fill' as const,
  },
  {
    label: 'Help & Support',
    route: '/(main)/(tabs)/help' as const, // Hidden tab screen (keeps tabs visible)
    icon: 'questionmark.circle' as const,
  },
  {
    label: 'Settings',
    route: '/(main)/(tabs)/settings' as const, // Hidden tab screen (keeps tabs visible)
    icon: 'gear' as const,
  },
];

export function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: Colors.background }}
    >
      {/* Drawer header with app branding and close button */}
      <View style={[styles.header, { backgroundColor: Colors.background }]}>
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <Text style={[styles.headerTitle, { color: Colors.tint }]}>
              Vida Laranja
            </Text>
            <Text style={[styles.headerSubtitle, { color: Colors.text }]}>
              Welcome back!
            </Text>
          </View>
          {/* Close button in top right */}
          <Pressable
            style={[
              styles.closeButton,
              { backgroundColor: 'rgba(0,0,0,0.05)' },
            ]}
            onPress={() => props.navigation.closeDrawer()}
            android_ripple={{ color: 'rgba(0,0,0,0.1)', radius: 20 }}
          >
            <IconSymbol name="xmark" size={22} color={Colors.text} />
          </Pressable>
        </View>
      </View>

      <View style={styles.drawerItems}>
        {drawerItems.map((item, index) => (
          <DrawerItem
            key={index}
            label={item.label}
            onPress={() => router.push(item.route)}
            icon={({ focused, size }) => (
              <IconSymbol name={item.icon} size={size} color={Colors.tint} />
            )}
            labelStyle={{
              color: Colors.text,
            }}
            style={styles.drawerItem}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    marginBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 4,
  },
  closeButton: {
    padding: 10,
    borderRadius: 22,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 44,
    minHeight: 44,
  },
  drawerItems: {
    flex: 1,
    paddingTop: 10,
  },
  drawerItem: {
    marginVertical: 2,
  },
});
