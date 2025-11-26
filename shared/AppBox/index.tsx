import { View, ViewProps } from 'react-native';

function AppBox({ children, ...props }: ViewProps) {
    return (
        <View {...props}>
        { children }
        </View>
    )
}

export default AppBox;