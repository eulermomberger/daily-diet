import RNDateTimePicker from '@react-native-community/datetimepicker';
import * as Device from 'expo-device';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Modal = styled.Modal`
  flex: 1;
`;

export const ModalContainer = styled.View`
  background-color: ${Device.osName === 'Android' ? '' : 'rgba(0, 0, 0, 0.5)'};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CalendarArea = styled.View`
  height: 300px;
  width: 300px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: flex-start;
`;

export const CalendarLabelArea = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const CalendarLabel = styled.Text`
  text-transform: uppercase;
  padding: 0px 20px 20px 20px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const DateTimePicker = styled(RNDateTimePicker).attrs(({ theme }) => ({
  locale: 'pt-BR',
  display: 'spinner',
  textColor: `${theme.COLORS.GRAY_700}`,
  is24Hour: true,
}))`
  height: 260px;
  width: 300px;
`;
