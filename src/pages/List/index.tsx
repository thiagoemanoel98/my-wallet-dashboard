import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCardProps from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const List: React.FC = () => {

  let { type } = useParams();

  const Title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const months = [
    {
      value: 7,
      label: "Julho",
    },
    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
  ];

  const years = [
    {
      value: 2018,
      label: "2018",
    },
    {
      value: 2019,
      label: "2019",
    },
    {
      value: 2020,
      label: "2020",
    },
  ];

  return (
    <S.Container>
      <ContentHeader title={Title} lineColor="#F7931B">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <S.Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </S.Filters>

      <S.Content>
        <HistoryFinanceCardProps
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="27/07/2022"
          amount="R$ 130,00"
        />
        <HistoryFinanceCardProps
          tagColor="#E44C4E"
          title="Conta de Gás"
          subtitle="27/07/2022"
          amount="R$ 100,00"
        />
      </S.Content>
    </S.Container>
  );
};

export default List;
