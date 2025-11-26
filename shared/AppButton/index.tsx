import { Pressable, PressableProps } from 'react-native'
import { APP_FONTS, } from 'theme'
import AppText, { AppTextProps } from '../AppText'

interface AppButtonProps extends PressableProps {
    buttonText?: string
    secondary?: boolean
}

function AppButton({ buttonText, children, className, secondary = false, ...props }: AppButtonProps) {
    return (
        <Pressable className={`${!secondary ? "bg-black" : "bg-white border-2 border-black" } w-full items-center rounded-md py-4`}  {...props}>
            <AppText className={`${!secondary ? "text-white" : "text-black" }`}>{buttonText}</AppText>
        </Pressable>

    )
}

export default AppButton