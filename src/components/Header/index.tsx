import { Container, Logo, BackIcon, BackButton } from './styles';

import logo from "@assets/logo.png";

export function Header(){
    return (
        <Container>
            {/* <BackButton>
                <BackIcon />
            </BackButton> */}
            <Logo source={logo}/>
        </Container>
    )
}