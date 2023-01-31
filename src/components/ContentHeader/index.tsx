import React from "react";

import * as S from "./styles";

const ContentHeader: React.FC = () => {
  return (
    <S.Container>
      <S.TitleArea>
        <h1>Título</h1>
      </S.TitleArea>
      <S.Controllers>
        <button type="button">Botão A</button>
        <button type="button">Botão B</button>
      </S.Controllers>
    </S.Container>
  );
};

export default ContentHeader;
