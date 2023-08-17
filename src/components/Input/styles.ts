import { TextInputProps } from 'react-native';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Field = styled.TextInput<TextInputProps>`
  width: 100%;
  height: ${({ multiline }) => multiline ? 150 : 50}px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;
  padding: 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  margin-bottom: 5px;
`;
