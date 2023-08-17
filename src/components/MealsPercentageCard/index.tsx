import { useTheme } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

import { MealsPercent } from '@components/MealsPercent';

import { Container } from './styles';

type Props = {
  percentage: number;
  onPress: () => void;
};

export function MealsPercentageCard ({ percentage, onPress }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container
      type={percentage >= 70 ? 'PRIMARY' : 'SECUNDARY'}
      onPress={onPress}
    >
      <ArrowUpRight
        size={24}
        color={percentage >= 70 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
        style={{ alignSelf: 'flex-end', marginTop: -10, marginBottom: -15 }}
      />
      <MealsPercent percentage={percentage} />
    </Container>
  );
}
