import { useNavigation } from '@react-navigation/native';

import { BackButton, BackIcon, Container, ThemeType, Title } from './styles';

type Props = {
  title: string;
  showBackIcon?: boolean;
  themeType?: ThemeType
};

export function Header ({ title, showBackIcon = false, themeType = 'DEFAULT' }: Props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container type={themeType}>
      {showBackIcon && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Title>{title}</Title>
    </Container>
  );
}
