import React from "react";
import { StyledButton } from "./Button.styles";

interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, onClick }: Props) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default Button;
