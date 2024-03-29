import { Container, Logo, BackIcon, BackButton } from './styles';

import logo from "@assets/logo.png";
import { useNavigation } from '@react-navigation/native';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false}: Props){

    const navigation = useNavigation();

    function handleGoBack(){
        // navigation.goBack();
        navigation.navigate('groups');
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logo}/>
        </Container>
    )
}