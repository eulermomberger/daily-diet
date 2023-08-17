import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 40px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 70px;
  margin-bottom: -50px;
`;
