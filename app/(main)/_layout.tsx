import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      // Custom drawer content with app branding
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true, // Show headers for drawer screens
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.text,
        headerTitleStyle: {
          fontFamily: 'OldStandardTT-Bold', // Custom font for headers
          fontSize: 20,
        },
        headerLeft: () => <DrawerToggleButton tintColor={Colors.tint} />, // Orange hamburger menu
        drawerStyle: {
          backgroundColor: Colors.background,
        },
        drawerActiveTintColor: Colors.tint, // Orange for active items
        drawerInactiveTintColor: Colors.icon, // Gray for inactive items
      }}>
      {/* Primary navigation - nested tab navigator */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Main App',
          headerShown: false, // Let tabs handle their own headers
          drawerIcon: ({ color, size }) => (
            <IconSymbol name="house.fill" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
