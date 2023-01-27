import React from "react";

import * as S from "./styles";

import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = () => {
  return (
    <S.Container>
      <MainHeader />
      <Aside />
      <Content />
    </S.Container>
  );
};

export default Layout;
