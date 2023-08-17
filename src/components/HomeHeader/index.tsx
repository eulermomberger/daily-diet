import { Container, Logo, UserLogo, UserLogoContainer } from './styles';

import logoImg from '@assets/logo.png';
import logoUserImg from '@assets/logo-user.png';

export function HomeHeader () {
  return (
    <Container>
      <Logo source={logoImg}/>
      <UserLogoContainer>
        <UserLogo source={logoUserImg} />
      </UserLogoContainer>
    </Container>
  );
}
