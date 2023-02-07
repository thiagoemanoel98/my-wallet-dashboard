import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCardProps from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import * as S from "./styles";

interface IData {
  id: string;
  decription: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  let { type } = useParams();
  const [data, setData] = useState<IData[]>([]);

  const EntryStyle = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", lineColor: "#F7913b" }
      : { title: "Saídas", lineColor: "#E44C4E" };
  }, [type]);

  const ListData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
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

  useEffect(() => {
    const response = ListData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        decription: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dataFormatted: item.date,
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });

    setData(response);
  }, []);

  return (
    <S.Container>
      <ContentHeader title={EntryStyle.title} lineColor={EntryStyle.lineColor}>
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
        {data.map((item) => (
          <HistoryFinanceCardProps
            key={item.id}
            tagColor={item.tagColor}
            title={item.decription}
            subtitle={item.dataFormatted}
            amount="R$ 130,00"
          />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default List;
