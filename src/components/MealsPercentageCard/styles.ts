import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  type: 'PRIMARY' | 'SECUNDARY'
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  background-color: ${({ theme, type }) => (
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  )};
  border-radius: 8px;
  padding: 20px;
  align-items: center;
`;
