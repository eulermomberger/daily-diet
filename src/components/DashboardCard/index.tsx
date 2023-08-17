import { Container, Label, NumberText, ThemeType } from './styles';

type Props = {
  themeType: ThemeType;
  number: number;
  label: string;
};

export function DashboardCard({ themeType, number, label }: Props) {
  return (
    <Container type={themeType}>
      <NumberText>{number}</NumberText>
      <Label>{label}</Label>
    </Container>
  );
}
