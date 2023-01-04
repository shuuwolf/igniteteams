import { Container, Logo, BackIcon, BackButton } from './styles';

import logo from "@assets/logo.png";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false}: Props){
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logo}/>
        </Container>
    )
}