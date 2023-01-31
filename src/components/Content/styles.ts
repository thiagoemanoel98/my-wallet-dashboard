import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT; // Vai ficar no MH
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.primary};
  padding: 25px;
`;
