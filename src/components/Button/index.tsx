import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

import * as S from "./styles";

type IInputProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IInputProps> = ({ children, ...rest }) => (
  <S.Container {...rest}>{children}</S.Container>
);

export default Button;
