import styled, { css } from 'styled-components/native';

export const Modal = styled.Modal`
  flex: 1;
`;

export const ModalBackdrop = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

export const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 220px;
  border-radius: 10px;
  padding: 25px;
`;

export const TitleArea = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  text-align: center;
`;

export const ButtonsGroup = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;
