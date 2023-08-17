import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserLogoContainer = styled.View`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 20px;
`;

export const UserLogo = styled.Image`
  width: 100%;
  height: 100%;
`;
