import React from "react";

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

import * as S from "./styles";
import formatCurrency from "../../utils/formatCurrency";

interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
  return (
    <S.Container>
      <S.SideLeft>
        <h2>{title}</h2>

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
          <BarChart data={data}>
            <Bar dataKey="amount">
              {data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  cursor={"pointer"}
                  fill={indicator.color}
                />
              ))}
            </Bar>
            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
          </BarChart>
        </ResponsiveContainer>
      </S.SideRight>
    </S.Container>
  );
};

export default BarChartBox;
