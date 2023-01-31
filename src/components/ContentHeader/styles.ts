import styled from "styled-components";

interface ITitleAreaProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const TitleArea = styled.div<ITitleAreaProps>`
  > h1 {
    color: ${(props) => props.theme.colors.white};

    &::after {
      content: "";
      display: block; // usar propriedades de largura
      width: 55px;
      border-bottom: 10px solid ${(props) => props.lineColor};
    }
  }
`;

export const Controllers = styled.div`
    display: flex;
    
`;
