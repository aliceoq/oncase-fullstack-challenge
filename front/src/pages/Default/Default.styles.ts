import styled from "styled-components";

const ChartContainer = styled.div`
  height: 400px;
  width: 400px;
  max-width: 80%;
`;

const TopBar = styled.div`
  background-color: #00b8e2;
  display: flex;
  padding: 45px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 10px;
  row-gap: 20px;
`;

const StyledForm = styled.form`
  gap: 16px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export {
  ChartContainer,
  TopBar,
  StyledForm,
};
