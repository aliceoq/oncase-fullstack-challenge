import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #00b8e2;
  padding: 10px;
  width: 140px;
  border: 2px solid white;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 2px;
  text-align: center;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #00A4C9;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export { StyledButton };
