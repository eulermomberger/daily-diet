import styled, { css } from 'styled-components/native';

export const Container = styled.View`
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  margin-bottom: 5px;
`;
