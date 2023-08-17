import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const FormGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const FormContent = styled.View`
  flex: 1;
  justify-content: space-between;
`;
