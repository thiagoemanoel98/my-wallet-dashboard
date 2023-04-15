import React from "react";

import * as S from "./styles";

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => (
  <S.Container>{children}</S.Container>
);

export default Content;
