import React from "react";

import * as S from "./styles";
import logoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src={logoImg} alt="My Wallet" />
        <h2>My Wallet</h2>
      </S.Logo>

      <S.Form onSubmit={() => {}}>
        <S.FormTitle>Entrar</S.FormTitle>

        <Input type="email" placeholder="Email" required />
        <Input  type="password" placeholder="Senha" required />

        <Button type="submit">Acessar</Button>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
