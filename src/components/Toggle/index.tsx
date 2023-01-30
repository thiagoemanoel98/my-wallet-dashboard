import React from "react";

import * as S from "./styles";

// Componente puro: só recebe parametros

const Toggle: React.FC = () => (
  <S.Container>
    <S.Label>Light</S.Label>
    <S.ToggleSelector
      checked={true}
      onChange={() => {}}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <S.Label>Dark</S.Label>
  </S.Container>
);

export default Toggle;
