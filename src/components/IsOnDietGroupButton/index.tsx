import { IsOnDietButton } from '@components/IsOnDietButton';

import { Container, ContainerButtons, Label } from './styles';

type Props = {
  isOnDiet: boolean | null;
  setIsOnDiet: (value: boolean) => void;
};

export function IsOnDietGroupButton({ isOnDiet, setIsOnDiet }: Props) {
  return (
    <Container>
      <Label>Está dentro da dieta?</Label>

      <ContainerButtons>
        <IsOnDietButton
          type='PRIMARY'
          isActive={isOnDiet}
          onPress={() => setIsOnDiet(true)}
        />

        <IsOnDietButton
          type='SECONDARY'
          isActive={isOnDiet === false}
          onPress={() => setIsOnDiet(false)}
        />
      </ContainerButtons>
    </Container>
  );
}