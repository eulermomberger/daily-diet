import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type PropsStatus = {
  type: 'REACHED' | 'NOT_REACHED';
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  padding-right: 15px;
`;

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
}))`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  flex: 1;
  padding: 0px 15px;
  overflow: hidden;
`;

export const Status = styled.View<PropsStatus>`
  background-color: ${({ theme, type }) => (
    type === 'REACHED' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID
  )};
  height: 16px;
  width: 16px;
  border-radius: 8px;
  padding-left: 15px;
`;
