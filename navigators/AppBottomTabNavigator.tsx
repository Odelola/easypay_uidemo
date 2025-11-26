import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';
import { HomeIcon, SearchIcon, LibraryIcon, MenuIcon, HomeIconActive, SearchIconActive, LibraryIconActive, MenuIconActive } from '../components/Icons/bottomTabIcons';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Platform } from 'react-native';


const AppBottomTab = createBottomTabNavigator();

export default function AppBottomTabNavigator() {
       const getRouteIcon = (focused: boolean, route: RouteProp<ParamListBase, string>) => {
        switch (route.name) {
            case "Home":
                return focused ? <HomeIconActive /> : <HomeIcon />
            case "Search":
                return focused ? <SearchIconActive /> : <SearchIcon />
            case "Library":
                return focused ? <LibraryIconActive /> : <LibraryIcon />
            case "Menu":
                return focused ? <MenuIconActive /> : <MenuIcon />
            default:
                break;
        }
    }

    const defaultTabStyle = {
        // backgroundColor: tabBarBackground,
        paddingTop: 0,
        borderTopWidth: 0,
        height: 80
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
                tabBarIconStyle: {marginTop: 10, marginBottom: 10},
                headerShown: false,
                tabBarStyle: [defaultTabStyle, Platform.OS === "ios" && tabStyleForIos],
                // tabBarLabelStyle: { color: whiteTextColor },
                tabBarItemStyle: {paddingBottom: 0},
                // tabBarActiveBackgroundColor: pureBlack
            })}
        >
            <AppBottomTab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: "Home",
                    title: "Home",
                }}
            />
        </AppBottomTab.Navigator>
    )
}