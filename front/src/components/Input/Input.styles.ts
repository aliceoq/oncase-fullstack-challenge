import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  border: 0;
  border-radius: 2px;
  width: 220px;
  appearance: none;
  background-color: #fff;
  color: #333;
  border-bottom: 2px solid #00b8e2;
  transition: border-color 0.5s ease;

  &:focus, &:hover {
    border-bottom: 2px solid #575757;
  }
`;

export { StyledInput };
