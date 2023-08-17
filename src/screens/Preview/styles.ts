import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type Props = {
  type: 'PRIMARY' | 'SECUNDARY';
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => (
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  )};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 10px;
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  margin-bottom: 20px;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 5px;
`;

export const MealDate = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  margin-bottom: 25px;
`;

export const BadgeDiet = styled.View`
  width: 150px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 20px;
  padding: 10px;
`;

export const StatusCircle = styled.View<Props>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  };
`;

export const DietText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const ButtonsGroup = styled.View`
  gap: 10px;
`;
