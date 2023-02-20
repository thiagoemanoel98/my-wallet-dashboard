import React, { useMemo } from "react";

import CountUp from "react-countup";

import dollarImg from "../../assets/dollar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

import * as S from "./styles";

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "dolar" | "arrowUp" | "arrowDown";
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case "dolar":
        return dollarImg;
      case "arrowUp":
        return arrowUpImg;
      case "arrowDown":
        return arrowDownImg;
      default:
        return "dolar";
    }
  }, [icon]);

  return (
    <S.Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          start={0}
          end={amount}
          separator="."
          decimals={2}
          decimal=","
          prefix="R$ "
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected} alt={title} />
    </S.Container>
  );
};

export default WalletBox;
