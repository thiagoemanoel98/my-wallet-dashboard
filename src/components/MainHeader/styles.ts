import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH; // Vai ficar no MH
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px; // 10px dos lados

  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
