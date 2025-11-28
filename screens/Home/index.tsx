import { BrandLogo, SpecialDeal_GirlShoppingImage, SunHatImage } from "@/assets/svgs"
import { APP_SCREEN_NAMES } from "@/constants"
import { useWallet } from "@/contexts"
import { QUICKACTIONS_DATA, SERVICES_DATA, SPECIAL_DEALS_DATA } from "@/mocks"
import { AppBox, AppScreen, AppText } from "@/shared"
import { APP_FONTS, SCREEN_MEASUREMENTS } from "@/theme"
import { getFontSize } from "@/utils/functions"
import { NavigationProp } from "@react-navigation/native"
import { Dimensions, Pressable, ScrollView } from "react-native"


const Home = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
    const { getTextFontSize } = getFontSize;
    const { width } = Dimensions.get("window");
    const { balance, transactions } = useWallet();
    const _navigateToSendMoneyScreen = () => {
        navigation.navigate(APP_SCREEN_NAMES["SEND-MONEY"]);
    }

    const SERVICE_CHARGE = 2;

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
                        <AppText className="text-dark" fontSize={26} fontFamily={APP_FONTS["IBM-PLEX-SANS-SEMIBOLD"]}>₦{balance.toFixed(2)}</AppText>
                    </AppBox>
                </AppBox>
                <AppBox className="bg-black rounded-md flex-row  justify-around items-center p-6 mt-4">
                    {QUICKACTIONS_DATA.map(({ icon: Icon, actionName, onPress }) => {
                        return (
                            <Pressable onPress={() => actionName.toLowerCase().startsWith("send") ? _navigateToSendMoneyScreen() : onPress()} className="items-center gap-y-2" key={actionName}>
                                <Icon width={getTextFontSize(22)} height={getTextFontSize(22)} />
                                <AppText fontFamily={APP_FONTS["ROBOTO-BOLD"]} className="text-white">{actionName}</AppText>
                            </Pressable >
                        )
                    })}
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

                <AppBox className="flex-row justify-between items-center">
                    <AppText fontFamily={APP_FONTS["IBM-PLEX-SANS-SEMIBOLD"]} fontSize={22}>Recent Transaction</AppText>
                    <AppText fontFamily={APP_FONTS["ROBOTO-SEMIBOLD"]}>See All</AppText>
                </AppBox>

                {transactions.length > 0 ? (
                    transactions.slice(0, 5).map((transaction) => (
                        <AppBox key={transaction.id} className="flex-row items-center bg-white rounded-md p-4 my-3" style={{ columnGap: 24 }}>
                            <AppBox>
                                <SunHatImage width={getTextFontSize(32)} height={getTextFontSize(32)} />
                            </AppBox>
                            <AppBox className="flex-row items-center justify-between flex-1">
                                <AppBox>
                                    <AppText fontFamily={APP_FONTS["ROBOTO-SEMIBOLD"]}>{transaction.recipient}</AppText>
                                    <AppText className="text-gray-300">{transaction.date}</AppText>
                                </AppBox>
                                <AppBox>
                                    <AppText fontFamily={APP_FONTS["ROBOTO-EXTRABOLD"]} fontSize={20}>₦{(transaction.amount + SERVICE_CHARGE).toFixed(2)}</AppText>
                                    <AppText className="text-gray-300 text-right" fontSize={12}>{transaction.timestamp}</AppText>
                                </AppBox>
                            </AppBox>
                        </AppBox>
                    ))
                ) : (
                    <AppBox className="flex-row justify-center items-center  rounded-md p-4 my-6">
                        <AppText className="text-dark" fontFamily={APP_FONTS["IBM-PLEX-SANS-SEMIBOLD"]}>No transactions yet</AppText>
                    </AppBox>
                )}
            </AppScreen>

        </ScrollView>

    )
}

export default Home