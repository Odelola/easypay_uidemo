import { Text, TextProps } from 'react-native'
import { getFontSize } from 'utils/functions';
import { APP_FONTS } from 'theme';

export interface AppTextProps extends TextProps {
    className?: string;
    fontFamily?: string;
    fontSize?: number;
}

const AppText = ({ children, className, fontSize = 16, fontFamily = APP_FONTS['ROBOTO-REGULAR'], style }: AppTextProps) => {
    const { getTextFontSize } = getFontSize;

    return (
        <Text className={className} style={[{
            fontFamily,
            fontSize: getTextFontSize(fontSize),
        }, style]}>{children} </Text>
    )
}

export default AppText