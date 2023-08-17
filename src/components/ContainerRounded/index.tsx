import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

import { Container } from './styles';

type Props = ViewProps & {
  children: ReactNode;
};

export function ContainerRounded ({ children, ...rest }: Props) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}
