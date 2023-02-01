import styled from "styled-components";

// Grid layout com 2 linhas e 2 colunas
// A primeira coluna (menu) ocupa 250px, a segunda (conteudo)
// ocupa tudo
export const Container = styled.div`
  display: grid;

  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'AS MH'
    'AS CT';

    height: 100vh; //View Height
`;
