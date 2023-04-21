import React, { useMemo, useState } from "react";
import { Emojis } from "../../utils/emojis";
import Toggle from "../Toggle";

import * as S from "./styles";
import { useTheme } from "../../hooks/theme";

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * Emojis.length);
    return Emojis[indice];
  }, []);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <S.Container>
      <S.Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Thiago Emanoel</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default MainHeader;
