import { BrandLogo, SpecialDeal_GirlShoppingImage, SunHatImage } from "@/assets/svgs"
import { QUICKACTIONS_DATA, SERVICES_DATA, SPECIAL_DEALS_DATA } from "@/mocks"
import { AppBox, AppScreen, AppText } from "@/shared"
import { APP_FONTS, SCREEN_MEASUREMENTS } from "@/theme"
import { getFontSize } from "@/utils/functions"
import { Dimensions, Pressable, ScrollView } from "react-native"


const Home = () => {
    const { getTextFontSize } = getFontSize;
    const { width } = Dimensions.get("window");

    return (
        <ScrollView className="flex-1" overScrollMode="never">

            <AppScreen className="bg-light" flex={false} style={{ paddingBottom: 0 }}>
                <AppBox className="mt-4">
                    <BrandLogo width={getTextFontSize(120)} height={getTextFontSize(26)} />
                </AppBox>
                <AppBox className="flex-row justify-between items-center mt-6 mb-4">
                    <AppBox>
                        <AppText fontFamily={APP_FONTS["ROBOTO-BOLD"]} fontSize={20}>Hi Samantha</AppText>
                        <AppText>Your available balance</AppText>
                    </AppBox>
                    <AppBox>
                        <AppText className="text-dark" fontSize={26} fontFamily={APP_FONTS["IBM-PLEX-SANS-SEMIBOLD"]}>₦4,590.00</AppText>
                    </AppBox>
                </AppBox>
                <AppBox className="bg-black rounded-md flex-row  justify-around items-center p-6 mt-4">
                    {QUICKACTIONS_DATA.map(({ icon: Icon, actionName, onPress }) => (
                        <Pressable onPress={onPress} className="items-center gap-y-2" key={actionName}>
                            <Icon width={getTextFontSize(22)} height={getTextFontSize(22)} />
                            <AppText fontFamily={APP_FONTS["ROBOTO-BOLD"]} className="text-white">{actionName}</AppText>
                        </Pressable >
                    ))}
                </AppBox>
                <AppBox className="bg-white rounded-md flex-row  justify-around items-center p-6 flex-wrap my-8" style={{ rowGap: 30 }}>
                    {SERVICES_DATA.map(({ icon: Icon, serviceName, onPress }) => (
                        <Pressable onPress={onPress} className="items-center gap-y-2 w-1/4" key={serviceName}>
                            <Icon width={getTextFontSize(22)} height={getTextFontSize(22)} />
                            <AppText fontFamily={APP_FONTS["ROBOTO-BOLD"]}>{serviceName}</AppText>
                        </Pressable >
                    ))}
                </AppBox>
            </AppScreen>

            <AppBox className="mb-6">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16} bounces={false} overScrollMode="never" style={{ paddingLeft: SCREEN_MEASUREMENTS.paddingHorizontal }}>
                    {SPECIAL_DEALS_DATA.map(({ heading, paragraph, background }, index) => (
                        <AppBox className={`gap-y-2 rounded-md p-4 flex-row justify-between items-center ml-6 ${index == 0 && "ml-0"}`} key={index} style={{ backgroundColor: background, width: width * .85, height: 150 }}>
                            <AppBox>
                                <AppBox>
                                    <AppText className="text-dark" fontFamily={APP_FONTS["ROBOTO-BOLD"]} fontSize={24}>{heading[0]}</AppText>
                                    <AppText className="text-dark" fontFamily={APP_FONTS["ROBOTO-BOLD"]} fontSize={20}>{heading[1]}</AppText>
                                </AppBox>
                                <AppBox>
                                    <AppText className="text-dark">{paragraph[0]}</AppText>
                                    <AppText className="text-dark">{paragraph[1]}</AppText>
                                </AppBox>
                            </AppBox>
                            <SpecialDeal_GirlShoppingImage width={getTextFontSize(200)} height={getTextFontSize(130)} />
                        </AppBox >
                    ))}
                </ScrollView>
            </AppBox>
            <AppScreen flex={false}>

                <AppBox className="flex-row justify-between">
                    <AppText fontFamily={APP_FONTS["IBM-PLEX-SANS-SEMIBOLD"]} fontSize={22}>Recent Transaction</AppText>
                    <AppText fontFamily={APP_FONTS["ROBOTO-SEMIBOLD"]}>See All</AppText>
                </AppBox>

                <AppBox className="flex-row items-center bg-white rounded-md p-4 my-6" style={{columnGap: 24 }}>
                    <AppBox>
                        <SunHatImage width={getTextFontSize(32)} height={getTextFontSize(32)}  />
                    </AppBox>
                    <AppBox className="flex-row items-center justify-between flex-1">
                        <AppBox>
                            <AppText fontFamily={APP_FONTS["ROBOTO-SEMIBOLD"]}>Raj K</AppText>
                            <AppText className="text-gray-300">February 24,2022</AppText>
                        </AppBox>
                        <AppBox>
                            <AppText fontFamily={APP_FONTS["ROBOTO-EXTRABOLD"]} fontSize={20}>₦240</AppText>
                        </AppBox>
                    </AppBox>
                </AppBox>
            </AppScreen>

        </ScrollView>

    )
}

export default Home