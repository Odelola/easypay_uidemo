import { APP_SCREEN_NAMES } from '@/constants';
import { Home, Receipt, SendMoney } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeNavigator() {
    const AppStack = createNativeStackNavigator();
    return (
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name={APP_SCREEN_NAMES.HOME} component={Home} />
                <AppStack.Screen name={APP_SCREEN_NAMES['SEND-MONEY']} component={SendMoney} />
                <AppStack.Screen name={APP_SCREEN_NAMES['RECEIPT']} component={Receipt} />
            </AppStack.Navigator>
    )
}
