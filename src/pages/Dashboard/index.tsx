import React, { useMemo, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import ListOfMonths from "../../utils/months";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";


import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import * as S from "./styles";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState(new Date().getFullYear());

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
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
  }, []);

  const months = useMemo(() => {
    return ListOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("Mês inválido");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error("Mês inválido");
    }
  };

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <S.Content>
        <WalletBox
          title="Saldo"
          amount={10000.0}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4E41F0"
        />
        <WalletBox
          title="Entradas"
          amount={7000.0}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox
          title="Saídas"
          amount={3000.0}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#E44C4E"
        />
        <MessageBox
          title="Muito bem!"
          description="Sua carteira está positiva!"
          icon={happyImg}
          footerText="Continue assim. Considere investir o seu saldo."
        />
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
