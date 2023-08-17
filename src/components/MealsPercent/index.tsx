import { useEffect, useState } from 'react';

import { Container, LegendText, PercentageTitle } from './styles';

type Props = {
  percentage: number;
};

export function MealsPercent({ percentage }: Props) {
  const [percentageFormatted, setPercentageFormatted] = useState('');

  useEffect(() => {
    const number = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(percentage);

    setPercentageFormatted(number);
  }, [percentage]);

  return (
    <Container>
      <PercentageTitle>{percentageFormatted}%</PercentageTitle>
      <LegendText>das refeições dentro da dieta</LegendText>
    </Container>
  );
}
