import React from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCardProps from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const List: React.FC = () => {
  const options = [
    {
      value: "Thiago",
      label: "Thiago",
    },
    {
      value: "Maria",
      label: "Maria",
    },
    {
      value: "Ana",
      label: "Ana",
    },
  ];

  return (
    <S.Container>
      <ContentHeader title="Entradas" lineColor="#F7931B">
        <SelectInput options={options}/>
      </ContentHeader>

      <S.Content>
        <HistoryFinanceCardProps 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="27/07/2022"
          amount="R$ 130,00"                              
        />
        <HistoryFinanceCardProps 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Gás"
          subtitle="27/07/2022"
          amount="R$ 100,00"                              
        />
        <HistoryFinanceCardProps 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"                              
        />
        <HistoryFinanceCardProps 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta do mercado"
          subtitle="27/07/2020"
          amount="R$ 300,00"                              
        />
        <HistoryFinanceCardProps 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"                              
        />
        <HistoryFinanceCardProps 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"                              
        />
      </S.Content>
    </S.Container>
  );
};

export default List;
