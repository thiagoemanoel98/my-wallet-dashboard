import React from "react";

import { Pie, ResponsiveContainer, PieChart, Cell } from "recharts";

import * as S from "./styles";

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

// Componente puro: Não possui states + performace
// Ao usar parenteses, já sabe que vai ser pure component

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
      <S.LegendContainer>
        {data.map((indicator) => (
          <S.Legend color={indicator.color} key={indicator.name}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </S.Legend>
        ))}
      </S.LegendContainer>
    </S.SideLeft>

    <S.SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey={"percent"}>
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </S.SideRight>
  </S.Container>
);

export default PieChartBox;
