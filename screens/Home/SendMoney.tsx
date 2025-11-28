import { useEffect, useState } from 'react'
import { AppBackNavigator, AppBox, AppButton, AppScreen, AppText } from '@/shared';
import { APP_FONTS, SCREEN_MEASUREMENTS } from '@/theme';
import { RecipientImage, SearchIcon } from '@/assets/svgs';
import { NumPad } from '@umit-turk/react-native-num-pad';
import { useNavigation } from '@react-navigation/native';
import { Alert, TextInput, useWindowDimensions } from 'react-native';
import { APP_SCREEN_NAMES } from '@/constants';
import { useWallet } from '@/contexts';

const SendMoney = () => {
    // Using navigation from the useNavigation causes proper hiding of the bottom tab bar
    const navigation = useNavigation();
    
    const { balance, deductBalance } = useWallet(); // Get wallet functions
    const [recipient, setRecipient] = useState('My Benefactor');
    const [amount, setAmount] = useState('');

    const { height } = useWindowDimensions();

    const SERVICE_CHARGE = 2;

    const _navigateToReceiptScreen = async () => {
        if (!recipient) {
            Alert.alert("Please input the name of a recipient to proceed");
            return;
        }
        if (!amount) {
            Alert.alert("Please input an amount to proceed");
            return;
        }


        const numAmount = parseFloat(amount);
        const deductionResult = await deductBalance(numAmount, recipient);

        if (!deductionResult.success) {
            Alert.alert("Transaction Failed", deductionResult.message);
            return;
        }

        const totalAmount = numAmount + SERVICE_CHARGE;
        navigation.navigate(APP_SCREEN_NAMES['RECEIPT'], { recipient, amount: totalAmount.toFixed(2), timestamp: deductionResult.timestamp });
    };

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
        });
    }, [navigation]);

    const handlePress = (digit: string) => {
        if (digit === 'delete') {
            setAmount(prev => prev.slice(0, -1));
        } else {
            setAmount(prev => prev + digit);
        }
    };
    return (
        <AppBox style={{ paddingBottom: SCREEN_MEASUREMENTS.paddingFromBottom }}>
            <AppScreen flex={false} className=" bg-primary">
                <AppBox className='flex-row justify-between items-center'>
                    <AppBox className='flex-row items-center'>
                        <AppBackNavigator />
                        <AppText className="ml-4 text-dark" fontFamily={APP_FONTS['IBM-PLEX-SANS-SEMIBOLD']} fontSize={20}>Send Money</AppText>
                    </AppBox>
                    <AppBox>
                        <SearchIcon />
                    </AppBox>
                </AppBox>
                <AppBox className='items-center my-10'>
                    <RecipientImage />
                    <AppBox className='mt-4 items-center'>
                        <TextInput
                            style={{ fontFamily: APP_FONTS['IBM-PLEX-SANS-SEMIBOLD'] }}
                            className='w-full text-center text-3xl'
                            onChangeText={setRecipient}
                            cursorColor={"#FFFFFF"}
                            selectionColor={"#FFFFFF"}
                            maxLength={20}
                            value={recipient}
                        />
                        {/* <AppText className='text-dark' fontFamily={APP_FONTS['IBM-PLEX-SANS-SEMIBOLD']} fontSize={22}>Recipient</AppText> */}
                        <AppText>+234 70XXXXXXXX</AppText>
                    </AppBox>
                </AppBox>
            </AppScreen>
            <AppScreen className='h-full bg-white'>
                <TextInput
                    style={{ fontFamily: APP_FONTS['IBM-PLEX-SANS-SEMIBOLD'] }}
                    className='border-b border-gray-400 w-full text-center text-3xl'
                    value={`${amount ? "₦" : ""} ${amount}`}
                />
                <NumPad
                    onPress={handlePress}
                    decimalSeparator="."
                    containerStyle={{
                        marginVertical: 0,
                        paddingVertical: 0,
                        height: height / 3,
                    }}
                    buttonStyle={{
                        backgroundColor: "transparent",
                        shadowColor: "transparent",
                        borderRadius: 0,
                    }}
                    buttonTextStyle={{
                        fontFamily: APP_FONTS['ROBOTO-SEMIBOLD']
                    }}
                />
                <AppButton buttonText='Send' onPress={() => _navigateToReceiptScreen()} />
            </AppScreen>
        </AppBox>
    )
}

export default SendMoney