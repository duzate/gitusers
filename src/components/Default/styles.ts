import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #A5A5A5;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
  background-color: ${theme.colors.background};
  border-radius: .8em;
`;