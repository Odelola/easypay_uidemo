import { SCREEN_MEASUREMENTS } from '@/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, ViewProps } from 'react-native';


function AppScreen({ flex = true, className, children, style, ...props }: { flex?: boolean } & ViewProps) {
    const { paddingHorizontal, paddingFromTop, paddingFromBottom} = SCREEN_MEASUREMENTS;
    return (
            <SafeAreaView  className={className} style={[{ paddingTop: paddingFromTop,  paddingHorizontal: paddingHorizontal, flex: flex ? 1 : 0, paddingBottom: paddingFromBottom }, style]} {...props}>
                {children}
            </SafeAreaView>
    )
}

export default AppScreen;