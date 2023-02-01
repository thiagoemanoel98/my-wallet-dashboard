import React from "react";

import * as S from "./styles";

interface IHistoryFinanceCardProps {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinanceCardProps: React.FC<IHistoryFinanceCardProps> = ({
  subtitle,
  tagColor,
  title,
  amount,
}) => {
  return (
    <S.Container>
      <S.Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>

    </S.Container>
  );
};

export default HistoryFinanceCardProps;
