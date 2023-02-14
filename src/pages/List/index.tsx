import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuid } from 'uuid';
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCardProps from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import * as S from "./styles";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import ListOfMonths from "../../utils/months";

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
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const EntryStyle = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", lineColor: "#F7913b" }
      : { title: "Saídas", lineColor: "#E44C4E" };
  }, [type]);

  const ListData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    ListData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      const isYearNotIncluded = !uniqueYears.includes(year);

      if (isYearNotIncluded) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [ListData]);

  const months = useMemo(() => {
    return ListOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  useEffect(() => {
    const filteredData = ListData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const formattedData = filteredData.map((item) => {
      return {
        id: uuid(),
        decription: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });

    setData(formattedData);
  }, [ListData, monthSelected, yearSelected, data.length]);

  return (
    <S.Container>
      <ContentHeader title={EntryStyle.title} lineColor={EntryStyle.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
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
            amount={item.amountFormatted}
          />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default List;
