import { Container, Label, ContainerProps, StatusCircle } from './styles';

type Props = ContainerProps & {
  onPress: () => void;
};

export function IsOnDietButton({ isActive, type, onPress }: Props) {
  return (
    <Container
      type={type}
      isActive={isActive}
      onPress={onPress}
    >
      <StatusCircle type={type} />
      <Label>{ type === 'PRIMARY' ? 'Sim' : 'Não' }</Label>
    </Container>
  );
}