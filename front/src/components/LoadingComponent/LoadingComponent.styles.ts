import styled, { keyframes } from "styled-components";

const fadeinoutAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const Loading = styled.div`
  animation: ${fadeinoutAnimation} 2s infinite;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #00b8e2;
  color: white;
  font-size: 28px;
  font-weight: 600;
`;

export { Wrapper, Loading };
