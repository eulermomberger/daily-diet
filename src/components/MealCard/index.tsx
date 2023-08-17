import { Container, Hour, Status, Title } from './styles';

import { MealDTO } from '@customTypes/MealDTO';

import { formatTime } from '@utils/helpers';

type Props = {
  meal: MealDTO;
  onPress: () => void;
};

export function MealCard ({ meal, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Hour>{formatTime(meal.date)}</Hour>
      <Title>{meal.name}</Title>
      <Status type={meal.isOnDiet ? 'REACHED' : 'NOT_REACHED'} />
    </Container>
  );
}
