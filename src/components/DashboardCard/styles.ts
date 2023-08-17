import styled, { css, DefaultTheme } from 'styled-components/native';

export type ThemeType = 'DEFAULT' | 'PRIMARY' | 'SECUNDARY';

type Props = {
  type: ThemeType;
};

const getBackgroundColor = (theme: DefaultTheme, type: ThemeType) => {
  if (type === 'PRIMARY') {
    return theme.COLORS.GREEN_LIGHT;
  } 
  
  if (type === 'SECUNDARY') {
    return theme.COLORS.RED_LIGHT;
  }

  return theme.COLORS.GRAY_200;
};

export const Container = styled.View<Props>`
  flex: 1;
  min-height: 100px;
  background-color: ${({ theme, type }) => getBackgroundColor(theme, type)};
  border-radius: 8px;
  padding: 25px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const NumberText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  margin-top: 5px;
  text-align: center;
`;
