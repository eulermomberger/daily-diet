import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';

import { ButtonContainer, Container, Image, Text, TextBold, Title } from './styles';

import isOnDietImg from '@assets/feedback-is-on-diet.png';
import isNotOnDietImg from '@assets/feedback-is-not-on-diet.png';

type RouteParams = {
  isOnDiet: boolean;
};

export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();

  const { isOnDiet } = route?.params as RouteParams;

  const handleGoHome = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      <Title type={isOnDiet ? 'PRIMARY' : 'SECUNDARY'}>
        {isOnDiet ? 'Continue assim!' : 'Que pena!'}
      </Title>
      {isOnDiet ? (
        <Text>
          Você continua <TextBold>dentro da dieta.</TextBold> Muito bem!
        </Text>
      ) : (
        <Text>
          Você <TextBold>saiu da dieta</TextBold> dessa vez, mas continue se esforçando e não desista!
        </Text>
      )}

      <Image source={isOnDiet ? isOnDietImg : isNotOnDietImg} />

      <ButtonContainer>
        <Button
          title='Ir para página inicial'
          onPress={handleGoHome}
        />
      </ButtonContainer>
    </Container>
  );
}
