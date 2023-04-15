import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT; // Vai ficar no MH
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.primary};
  padding: 25px;

  height: calc(100vh - 70px); // altura da tela / desconta a altura do cabeçalho
  overflow-y: scroll; // O que não couber -> scroll

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props=>props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props=>props.theme.colors.tertiary};
    border-radius: 10px;
  }
`;
