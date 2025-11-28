import { useFonts } from 'expo-font';
import { APP_FONTS } from './theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBottomTabNavigator } from './navigators';
import { Onboarding } from 'screens';
import { APP_SCREEN_NAMES } from './constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WalletProvider } from './contexts';

export default function App() {

  const [fontsLoaded] = useFonts({

    // IBM Plex Sans
    [APP_FONTS['IBM-PLEX-SANS-SEMIBOLD']]: require('./assets/fonts/ibmplex-sans/IBMPlexSans-SemiBold.ttf'),

    //  Roboto Fonts
    [APP_FONTS['ROBOTO-REGULAR']]: require('./assets/fonts/roboto/Roboto-Regular.ttf'),
    [APP_FONTS['ROBOTO-SEMIBOLD']]: require('./assets/fonts/roboto/Roboto-SemiBold.ttf'),
    [APP_FONTS['ROBOTO-BOLD']]: require('./assets/fonts/roboto/Roboto-Bold.ttf'),
    [APP_FONTS['ROBOTO-EXTRABOLD']]: require('./assets/fonts/roboto/Roboto-ExtraBold.ttf'),

  });

  if (!fontsLoaded) {
    return null;
  }

  const AppStack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <WalletProvider>
        <NavigationContainer>
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name={APP_SCREEN_NAMES.ONBOARDING} component={Onboarding} />
            <AppStack.Screen name={APP_SCREEN_NAMES['APP-BOTTOM-TAB-NAVIGATOR']} component={AppBottomTabNavigator} />
          </AppStack.Navigator>
        </NavigationContainer>
      </WalletProvider>
    </SafeAreaProvider>
  );
}