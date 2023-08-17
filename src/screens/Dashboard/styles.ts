import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type Props = {
  type: 'PRIMARY' | 'SECUNDARY'
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => (
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  )};
`;

export const Header = styled.View`
  padding-top: 10px;
  padding-bottom: 40px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Title = styled.Text`
  flex-direction: row;
  text-align: center;
  justify-content: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 15px;
`;

export const CardGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
`;
