import React from "react";

import * as S from "./styles";

interface IMessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
  icon,
}) => {
  return (
    <S.Container>
      <header>
        <h1>
          {title} <img src={icon} alt={title} />
        </h1>
        <p>{description}</p>
      </header>

      <footer>
        <span>{footerText}</span>
      </footer>
    </S.Container>
  );
};

export default MessageBox;
