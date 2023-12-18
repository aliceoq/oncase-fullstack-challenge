import React from "react";
import { StyledButton } from "./Button.styles";

function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
