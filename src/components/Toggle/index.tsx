import React from "react";

import * as S from "./styles";

// Componente puro: só recebe parametros
interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
  checked,
  labelLeft,
  labelRight,
  onChange,
}) => (
  <S.Container>
    <S.Label>{labelLeft}</S.Label>
    <S.ToggleSelector
      checked={checked}
      onChange={onChange}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <S.Label>{labelRight}</S.Label>
  </S.Container>
);

export default Toggle;
