import { ChevronLeftIcon } from '@/assets/svgs';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';


function AppBackNavigator() {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.goBack()}>
            <ChevronLeftIcon />
        </Pressable>
    )
}

export default AppBackNavigator;