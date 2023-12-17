import React from "react";
import { StyledButton } from "./Button.styles";

function Button({
  children,
  onClick,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
