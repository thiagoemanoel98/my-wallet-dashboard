import React from "react";

import * as S from "./styles";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = (props) => (
  <S.Container>
    <S.TitleArea lineColor={props.lineColor}>
      <h1>{props.title}</h1>
    </S.TitleArea>
    <S.Controllers>{props.children}</S.Controllers>
  </S.Container>
);

export default ContentHeader;
