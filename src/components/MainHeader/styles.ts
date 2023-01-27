import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH; // Vai ficar no MH
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secundary};
`;
