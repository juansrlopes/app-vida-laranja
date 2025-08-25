import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.text,
        headerLeft: () => <DrawerToggleButton tintColor={Colors.tint} />,
        drawerStyle: {
          backgroundColor: Colors.background,
        },
        drawerActiveTintColor: Colors.tint,
        drawerInactiveTintColor: Colors.icon,
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Main App',
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <IconSymbol name="house.fill" size={size} color={color} />
          ),
        }}
      />

    </Drawer>
  );
}
