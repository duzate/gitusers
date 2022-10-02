import styled from "styled-components";

export const Scroll = styled.div`
  height: 82.5vh;
  display: flex;
  flex-direction: column;
  overflow: auto;

  ::-webkit-scrollbar {
    overflow-y: hidden;
    width: 0;
  }
`;