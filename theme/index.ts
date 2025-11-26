import { Platform } from 'react-native';
import { getFontSize, getStatusBarHeight } from '../utils/functions';


const { getTextFontSize } = getFontSize;

export const APP_FONTS = {
    "IBM-PLEX-SANS-SEMIBOLD": "IBMPlexSans-SemiBold",
    "ROBOTO-REGULAR": "Roboto-Regular",
    "ROBOTO-SEMIBOLD": "Roboto-Semibold",
    "ROBOTO-BOLD": "Roboto-Bold",
    "ROBOTO-EXTRABOLD": "Roboto-ExtraBold",
};

export const SCREEN_MEASUREMENTS = {
    paddingHorizontal: 20,
    paddingFromTop: Platform.OS === "android" ? getStatusBarHeight.statusBarHeight + 12 : 12,
    paddingFromBottom: 20,
}
