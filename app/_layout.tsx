import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// Required imports for drawer navigation to work properly
import 'react-native-gesture-handler';
import 'react-native-reanimated';

export default function RootLayout() {
  // Load custom fonts for the app
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    // TODO: Add custom fonts when available:
    // 'OldStandardTT-Regular': require('../assets/fonts/OldStandardTT-Regular.ttf'),
    // 'OldStandardTT-Bold': require('../assets/fonts/OldStandardTT-Bold.ttf'),
    // 'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    // 'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  // Don't render anything until fonts are loaded
  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* Root navigation stack - manages top-level routing */}
      <Stack
        screenOptions={{
          headerShown: false, // Hide headers by default
        }}
        initialRouteName="welcome" // Start with welcome screen
      >
        {/* Welcome screen - first screen users see */}
        <Stack.Screen 
          name="welcome" 
          options={{ 
            headerShown: false,
            gestureEnabled: false, // Prevent swipe back
          }} 
        />
        {/* Main app navigation (drawer + tabs) */}
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        {/* 404 error screen */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
