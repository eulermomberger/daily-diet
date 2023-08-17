import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ThemeType = 'PRIMARY' | 'SECUNDARY';

type ButtonProps = {
  themeType: ThemeType;
};

type TextProps = {
  themeType: ThemeType;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  ${({ theme, themeType }) => css`
    border: ${themeType === 'SECUNDARY' ? `2px solid ${theme.COLORS.GRAY_700}` : '0px'};
    background-color: ${themeType === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
  `};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  height: 60px;
  width: '100%';
  border-radius: 10px;
`;

export const Title = styled.Text<TextProps>`
  ${({ theme, themeType }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${themeType === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  `};
`;
