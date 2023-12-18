import React from "react";
import { StyledInput } from "./Input.styles";

function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <StyledInput {...props} />;
}

export default Input;
