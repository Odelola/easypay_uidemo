import { APP_PALETTE } from '@/theme';
import { Pressable, TextInput, TextInputProps, View } from 'react-native';

export interface AppInputProps extends TextInputProps {
    hasMargin?: boolean,
    margin?: number;
    iconLeft?: React.ReactElement;
    iconRight?: React.ReactElement;
    iconRightChanged?: React.ReactNode;
    iconRightOnPress?: () => void;
    hasIconDivider?: boolean;
}


function AppInput({ hasMargin = false, margin = 16, placeholder, iconLeft, iconRight, iconRightOnPress, hasIconDivider = false }: AppInputProps) {
    return (
        <View className="bg-grey-300 rounded-2xl w-full flex-row items-center" style={{ height: 50, marginBottom: hasMargin ? margin : 0 }}>
            {iconLeft && (<Pressable className={`flex-row items-center gap-x-3 justify-center h-full rounded-2xl w-[20%]`} onPress={iconRightOnPress}>
                {iconLeft}
            </Pressable>)}

            <TextInput placeholder={placeholder} className={`flex-1 full h-full ${!iconLeft && "px-6"} rounded-2xl`} 
            cursorColor={APP_PALETTE.primary.DEFAULT} 
            selectionColor={APP_PALETTE.primary.DEFAULT} />

            {iconRight && (<Pressable className="flex-row items-center gap-x-3 justify-center h-full rounded-2xl w-[20%]" onPress={iconRightOnPress}>
                {hasIconDivider && (<View className='h-1/2 bg-grey-400 w-0' style={{ width: 1 }} />)}
                {iconRight}
            </Pressable>)}
        </View>
    )
}

export default AppInput;