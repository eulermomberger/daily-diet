import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ContainerContent = styled.View`
  flex: 1;
  padding: 20px 0px;
  gap: 30px;
`;

export const MealsSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 10px;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 10px;
`;
