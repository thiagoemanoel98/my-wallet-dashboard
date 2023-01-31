import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const Dashboard: React.FC = () => {
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
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
  );
};

export default Dashboard;
