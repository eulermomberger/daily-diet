import styled, { css, DefaultTheme } from 'styled-components/native';

type ButtonType = 'PRIMARY' | 'SECONDARY';
type IsActiveType = boolean | null;

export type ContainerProps = {
  type: ButtonType;
  isActive: IsActiveType;
};

type StatusProps = {
  type: ButtonType;
};

const getBackgroundButton = (
  theme: DefaultTheme,
  isActive: IsActiveType,
  type: ButtonType
) => {
  if (!isActive) {
    return theme.COLORS.GRAY_200;
  }

  return type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT;
};

const getBorderButton = (theme: DefaultTheme, isActive: IsActiveType, type: ButtonType) => {
  if (!isActive) {
    return '0px';
  }

  return `1px solid ${type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}`;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-radius: 10px;
  ${({ theme, isActive, type }) => css`
    background-color: ${getBackgroundButton(theme, isActive, type)};
    border: ${getBorderButton(theme, isActive, type)};
  `};
`;

export const StatusCircle = styled.View<StatusProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  };
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;
