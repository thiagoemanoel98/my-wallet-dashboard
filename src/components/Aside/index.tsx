import React from "react";

import * as S from "./styles";

import logoImg from "../../assets/logo.svg";

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";
import { useAuth } from "../../hooks/auth";

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <S.Container menuIsOpen={false}>
      <S.Header>
        <S.LogoImg src={logoImg} alt="Logo MyWallet" />
        <S.Title>MyWallet</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>

        <S.MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>

        <S.MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </S.MenuItemLink>

        <S.MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  );
};

export default Aside;
