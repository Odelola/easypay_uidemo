import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Invoice, Notification, Profile, QRCode } from '@/screens';
import { HomeIcon, HomeIconActive, InvoiceIcon, InvoiceIconActive, NotificationIcon, NotificationIconActive, ProfileIcon, ProfileIconActive, QrCodeIcon } from '@/assets/svgs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Platform } from 'react-native';
import { APP_SCREEN_NAMES } from '@/constants';
import { AppBox } from '@/shared';
import { getFontSize } from '@/utils/functions';


const AppBottomTab = createBottomTabNavigator();

function createEllipsesForActiveIcon(icon: React.ReactElement ) {
    return (
        <AppBox style={{ alignItems: "center", rowGap: 2 }}>
            {icon}
            <AppBox style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: "black" }} />
        </AppBox>
    )
}

export default function AppBottomTabNavigator() {
    const { getTextFontSize } = getFontSize;

    const getRouteIcon = (focused: boolean, route: RouteProp<ParamListBase, string>) => {
        switch (route.name) {
            case APP_SCREEN_NAMES.HOME:
                return focused ? createEllipsesForActiveIcon(<HomeIconActive width={getTextFontSize(21)} height={getTextFontSize(21)} />) : <HomeIcon />
            case APP_SCREEN_NAMES.INVOICE:
                return focused ? createEllipsesForActiveIcon(<InvoiceIconActive width={getTextFontSize(21)} height={getTextFontSize(21)} />) : <InvoiceIcon width={"100%"} />
            case APP_SCREEN_NAMES['QR-CODE']:
                return <QrCodeIcon width={getTextFontSize(42)} height={getTextFontSize(42)} />
            case APP_SCREEN_NAMES.NOTIFICATION:
                return focused ? createEllipsesForActiveIcon(<NotificationIconActive width={getTextFontSize(21)} height={getTextFontSize(21)} />) : <NotificationIcon />
            case APP_SCREEN_NAMES.PROFILE:
                return focused ? createEllipsesForActiveIcon(<ProfileIconActive width={getTextFontSize(21)} height={getTextFontSize(21)} />) : <ProfileIcon />
            default:
                break;
        }
    }

    const defaultTabStyle = {
        paddingTop: 0,
        borderTopWidth: 0,
        height: 80,
    }
    const tabStyleForIos = {
        position: "absolute",
        bottom: 35,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
        margin: 0,
        overflow: "hidden",
        flex: 1,
        paddingBottom: 0
    }

    return (
        <AppBottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => getRouteIcon(focused, route),
                tabBarIconStyle: { marginTop: 10, marginBottom: 10 },
                headerShown: false,
                tabBarStyle: [defaultTabStyle, Platform.OS === "ios" && tabStyleForIos],
                tabBarShowLabel: false,
                // tabBarLabelStyle: { color: whiteTextColor },
                tabBarItemStyle: { paddingBottom: 0 },
                // tabBarActiveBackgroundColor: pureBlack
            })}
        >
            <AppBottomTab.Screen name={APP_SCREEN_NAMES.HOME} component={Home}
                options={{
                }}
            />
            <AppBottomTab.Screen name={APP_SCREEN_NAMES.INVOICE} component={Invoice} />
            <AppBottomTab.Screen name={APP_SCREEN_NAMES['QR-CODE']} component={QRCode} />
            <AppBottomTab.Screen name={APP_SCREEN_NAMES.NOTIFICATION} component={Notification} />
            <AppBottomTab.Screen name={APP_SCREEN_NAMES.PROFILE} component={Profile} />
        </AppBottomTab.Navigator>
    )
}