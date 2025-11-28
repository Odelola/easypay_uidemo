import { ReceiptSucessImage, RecipientImage } from '@/assets/svgs';
import { APP_SCREEN_NAMES } from '@/constants';
import { AppBackNavigator, AppBox, AppButton, AppScreen, AppText } from '@/shared';
import { APP_FONTS, SCREEN_MEASUREMENTS } from '@/theme';
import { getFontSize } from '@/utils/functions';
import { NavigationProp, useRoute } from '@react-navigation/native';
import { ScrollView, useWindowDimensions } from 'react-native';

const Receipt = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
    const route = useRoute();
    const { getTextFontSize } = getFontSize;

    const _navigateToSendMoneyScreen = () => {
        navigation.navigate(APP_SCREEN_NAMES["SEND-MONEY"]);
    }

    const _navigateToHomeScreen = () => {
        navigation.navigate(APP_SCREEN_NAMES["HOME"]);
    }

    const { params: { recipient, amount, timestamp } } = route;

    return (
        <AppScreen className=" bg-primary relative">
                    {/* <AppBox className='bg-primary rounded-t-full absolute left-0 top-2/3' style={{ width: SCREEN_MEASUREMENTS.paddingHorizontal, height: SCREEN_MEASUREMENTS.paddingHorizontal }} /> */}
            <AppBox className='flex-row justify-between items-center'>
                <AppBox className='flex-row items-center'>
                    <AppBox className='items-center'>

                        <AppBackNavigator />
                    </AppBox>
                    <AppText className="ml-4 text-dark" fontFamily={APP_FONTS['IBM-PLEX-SANS-SEMIBOLD']} fontSize={20}>Transfer Receipt</AppText>
                </AppBox>
            </AppBox>
            <ScrollView className='bg-white mt-10 px-6 rounded-md' showsVerticalScrollIndicator={false} scrollEventThrottle={16} bounces={false} overScrollMode="never" contentContainerStyle={{ paddingBottom: SCREEN_MEASUREMENTS.paddingFromBottom * 2 }}>
                <AppBox className='relative w-full'>
                    <AppBox className='items-center'>
                        <ReceiptSucessImage />
                    </AppBox>
                    <AppBox className='items-center'>
                        <AppText className="ml-4 text-dark" fontFamily={APP_FONTS['IBM-PLEX-SANS-SEMIBOLD']} fontSize={28}>Transfer Success</AppText>
                        <AppBox className='mt-1 mb-3 items-center'>
                            <AppText>Your money has been successfully sent to</AppText>
                            <AppText>recipient</AppText>
                        </AppBox>
                        <AppText className='text-gray-500'>Total Transfer</AppText>
                        <AppText className="ml-4 text-dark" fontFamily={APP_FONTS['IBM-PLEX-SANS-SEMIBOLD']} fontSize={30}>{"₦" + amount}</AppText>
                        <AppBox className='border-2 border-dashed w-full mt-4' style={{ borderColor: "#E0E0E0" }} />
                    </AppBox>
                    <AppBox className='my-4'>
                        <AppText className='text-gray-500'>Recipient</AppText>
                        <AppBox className="flex-row items-center bg-light rounded-md p-4 my-4" style={{ columnGap: 24 }}>
                            <AppBox>
                                <RecipientImage width={getTextFontSize(32)} height={getTextFontSize(32)} />
                            </AppBox>
                            <AppBox className="flex-row items-end justify-between flex-1">
                                <AppBox>
                                    <AppText className="text-dark" fontFamily={APP_FONTS['IBM-PLEX-SANS-SEMIBOLD']} >{recipient}</AppText>
                                    <AppText className="text-gray-300" fontSize={14}>+23470XXXXXXXX</AppText>
                                </AppBox>
                                <AppBox>
                                    <AppBox className="" />
                                    <AppText className="text-gray-300">{timestamp}</AppText>
                                </AppBox>
                            </AppBox>
                        </AppBox>
                    </AppBox>
                    <AppBox className='gap-y-2'>
                        <AppButton buttonText='Done' onPress={() => _navigateToHomeScreen()} />
                        <AppButton className='border-0' secondary buttonText='Transfer more money' onPress={() => _navigateToSendMoneyScreen()} />
                    </AppBox>
                </AppBox>
            </ScrollView>
        </AppScreen >
    )
}

export default Receipt