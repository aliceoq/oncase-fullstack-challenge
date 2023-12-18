import styled from "styled-components";

const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const ChartContainer = styled.div`
  height: 400px;
  width: 400px;
  max-width: 80%;
`;

const StyledForm = styled.form`
  background-color: #00B8E2;
  gap: 16px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 45px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  margin-bottom: 24px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
`;

export {
  Root,
  ChartContainer,
  StyledForm,
  ContentContainer,
  TitleContainer,
  DataContainer,
};
