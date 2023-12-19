import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #575757;
  gap: 40px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 50px;
  flex-wrap: wrap;
`;

const StyledForm = styled.form`
  background-color: #00b8e2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 16px;
  border-radius: 5px;
`;

export { ContentContainer, Flex, StyledForm };
