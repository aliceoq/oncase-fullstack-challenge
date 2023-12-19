import styled from "styled-components";

const ChartContainer = styled.div`
  height: 400px;
  width: 400px;
  max-width: 80%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #575757;
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
  ChartContainer,
  ContentContainer,
  TitleContainer,
  DataContainer,
};
