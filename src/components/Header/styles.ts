import { ArrowLeft } from 'phosphor-react-native';
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

  return theme.COLORS.GRAY_300;
};

export const Container = styled.View<Props>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => getBackgroundColor(theme, type)};
  padding: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-left: -5px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 28,
  color: theme.COLORS.GRAY_600,
}))``;
