import React from 'react'
import { AppBox, AppButton, AppText } from '@/shared';
import { Animated, FlatList, FlatListProps, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import { APP_FONTS, SCREEN_MEASUREMENTS } from 'theme';
import { BrandLogo, OnboardImage1 } from '@assets/svgs';
import { AppTextProps } from '@/shared/AppText';
import { APP_SCREEN_NAMES } from '@/constants';
import { ONBOARDING_DATA, ONBOARDING_DATA_TYPE } from '@/mocks';
import { StatusBar } from 'expo-status-bar';
import { NavigationProp } from '@react-navigation/native';

function Onboarding({ navigation }: { navigation: NavigationProp<any, any> }) {
    const { width, height } = useWindowDimensions();

    const flatListRef = React.useRef(null);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const _navigateToHomeScreen = () => {
        navigation.navigate(APP_SCREEN_NAMES['APP-BOTTOM-TAB-NAVIGATOR'])
    }

    const ScrollIndicators = () => {
        return (
            <AppBox className='flex-row gap-x-2 my-4'>
                {ONBOARDING_DATA.map((_, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                    const inputRange2 = [(index) * (width), (index) * width * 2, (index + 1) * width * 4];
                    const colorChange = scrollX.interpolate({
                        inputRange,
                        outputRange: ["transparent", "#000000", "transparent",],
                        extrapolate: 'clamp'
                    });
                    const widthChange = scrollX.interpolate({
                        inputRange: inputRange2,
                        outputRange: [32, 8, 16],
                        extrapolate: 'clamp'
                    })
                    return (
                        <Animated.View className="!w-4 h-4 border-2 rounded-sm bg-gray-400" style={[{ borderColor: colorChange }]} key={index}></Animated.View>
                    )
                })}
            </AppBox>
        )
    }


    function OnboardingHeading({ children }: AppTextProps) {
        return (
            <AppText fontSize={30} fontFamily={APP_FONTS['IBM-PLEX-SANS-SEMIBOLD']} className='text-dark'>
                {children}
            </AppText>
        )
    }

    function OnboardingText({ children }: AppTextProps) {
        return (
            <AppText style={{ lineHeight: 24 }}>
                {children}
            </AppText>
        )
    }

    // const navigation = useNavigation();
    return (
        <AppBox className='pb-4'>
            <StatusBar style='dark' />
            <FlatList
                ref={flatListRef}
                data={ONBOARDING_DATA}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => (
                    <OnboardingSlide item={item} />
                )}
                alwaysBounceHorizontal={false}
                scrollEventThrottle={16}
                horizontal
                bounces={false}
                pagingEnabled
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}

                showsHorizontalScrollIndicator={false}
                overScrollMode='never'
            />
            <AppBox className='items-center mt-4'>
                <ScrollIndicators />
            </AppBox>
            <AppBox style={{ paddingHorizontal: width * .05 }} className='gap-y-2'>
                <AppButton buttonText={"Login"} onPress={() => _navigateToHomeScreen()} />
                <AppButton buttonText={"Sign Up"} secondary onPress={() => _navigateToHomeScreen()} />
            </AppBox>
        </AppBox>
    )

    function OnboardingSlide({ item }: { item: ONBOARDING_DATA_TYPE }) {
        return (
            <AppBox>
                <AppBox style={{ width, height: height / 1.85, paddingVertical: SCREEN_MEASUREMENTS.paddingFromTop}} className='bg-primary justify-between'>
                    <AppBox className='items-center'>
                        <BrandLogo />
                    </AppBox>
                    <AppBox className='items-center'>
                        <item.image width={"100%"} />
                    </AppBox>
                </AppBox>
                <AppBox className='items-center mt-8'>
                    <OnboardingHeading>
                        {item.heading[0]}
                    </OnboardingHeading>
                    <AppBox className='items-center gap-y-1.5 mt-4'>
                        <OnboardingText>
                            {item.paragraph[0]}
                        </OnboardingText>
                        <OnboardingText>
                            {item.paragraph[1]}
                        </OnboardingText>
                        <OnboardingText>
                            {item.paragraph[2]}
                        </OnboardingText>
                    </AppBox>
                </AppBox>
            </AppBox>
        )
    }
}

export default Onboarding