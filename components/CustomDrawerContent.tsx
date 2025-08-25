import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

const drawerItems = [
  {
    label: 'Home',
    route: '/(drawer)/(tabs)' as const,
    icon: 'house.fill' as const,
  },
  {
    label: 'Profile',
    route: '/(drawer)/(tabs)/profile' as const,
    icon: 'person.circle' as const,
  },
  {
    label: 'Settings',
    route: '/(drawer)/(tabs)/settings' as const,
    icon: 'gear' as const,
  },
  {
    label: 'Notifications',
    route: '/(drawer)/(tabs)/notifications' as const,
    icon: 'bell' as const,
  },
  {
    label: 'Help & Support',
    route: '/(drawer)/(tabs)/help' as const,
    icon: 'questionmark.circle' as const,
  },
];

export function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: Colors.background }}>
      <View style={[styles.header, { backgroundColor: Colors.background }]}>
        <Text style={[styles.headerTitle, { color: Colors.tint }]}>
          Vida Laranja
        </Text>
        <Text style={[styles.headerSubtitle, { color: Colors.text }]}>
          Welcome back!
        </Text>
      </View>
      
      <View style={styles.drawerItems}>
        {drawerItems.map((item, index) => (
          <DrawerItem
            key={index}
            label={item.label}
            onPress={() => router.push(item.route)}
            icon={({ focused, size }) => (
              <IconSymbol
                name={item.icon}
                size={size}
                color={Colors.tint}
              />
            )}
            labelStyle={{
              color: Colors.text
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 4,
  },
  drawerItems: {
    flex: 1,
    paddingTop: 10,
  },
  drawerItem: {
    marginVertical: 2,
  },
});
