import { ReactNode } from 'react';

import { Container, ThemeType, Title } from './styles';

type Props = {
  title: string;
  icon?: ReactNode;
  themeType?: ThemeType;
  onPress: () => void;
};

export function Button ({ title, icon, themeType = 'PRIMARY', onPress }: Props) {
  return (
    <Container
      themeType={themeType}
      onPress={onPress}
    >
      {icon}
      <Title themeType={themeType}>
        { title }
      </Title>
    </Container>
  );
}
