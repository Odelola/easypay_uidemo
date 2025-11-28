import { Dimensions } from 'react-native'
import React from 'react'
import { AppBox, AppText } from '@/shared';
import { APP_FONTS } from '@/theme';

const { width } = Dimensions.get("window");
const QRCode = () => {
    return (
        <AppBox className="flex-1 justify-center items-center bg-primary">
            <AppText className="text-black -tracking-wide uppercase -rotate-90" style={{ fontSize: width / 8 }} fontFamily={APP_FONTS['IBM-PLEX-SANS-SEMIBOLD']}>QRCODE</AppText>
        </AppBox>
    )
}

export default QRCode