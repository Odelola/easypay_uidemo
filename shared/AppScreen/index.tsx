import { SCREEN_MEASUREMENTS } from '@/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, ViewProps } from 'react-native';


function AppScreen({ flex = true, children, ...props }: { flex?: boolean } & ViewProps) {
    const { paddingHorizontal, paddingFromTop, paddingFromBottom} = SCREEN_MEASUREMENTS;
    return (
            <SafeAreaView className={flex ? "bg-white" : "" } style={{ paddingTop: paddingFromTop,  paddingHorizontal: paddingHorizontal, flex: flex ? 1 : 0, paddingBottom: paddingFromBottom }} {...props}>
                {flex && (<StatusBar style='dark' />)}
                {children}
            </SafeAreaView>
    )
}

export default AppScreen;