import { ReactNode } from "react";
import { ErrorDiv } from "./ErrorComponent.styles";

interface Props {
  children: ReactNode;
}

function ErrorComponent({ children }: Props) {
  return <ErrorDiv>{children}</ErrorDiv>;
}

export default ErrorComponent;
