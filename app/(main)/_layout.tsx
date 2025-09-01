import BrandLogo from '@/components/BrandLogo';
import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      // Custom drawer content with app branding and navigation items
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        // Drawer opens from the right side (matches menu icon position)
        drawerPosition: 'right',
        // Header configuration - consistent across all screens
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.tint, // Orange brand color background
        },
        headerTintColor: '#000', // Black for contrast on orange
        headerTitle: '', // Empty title - brand logo used instead
        headerLeft: () => <BrandLogo />, // Brand identity on left
        headerRight: () => <DrawerToggleButton tintColor="#000" />, // Menu access on right
        // Drawer styling
        drawerStyle: {
          backgroundColor: Colors.background,
        },
        drawerActiveTintColor: Colors.tint, // Orange for selected items
        drawerInactiveTintColor: Colors.icon, // Gray for unselected items
      }}>
      {/* Main app container - includes tab navigation + hidden drawer screens */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Main App',
          headerShown: true, // Enables the orange header with logo/menu
          drawerIcon: ({ color, size }) => (
            <IconSymbol name="house.fill" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
