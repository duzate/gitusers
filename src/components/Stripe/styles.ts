import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw;
  height: 12vh;
  background: ${theme.colors.stripe};
  margin: 3vh 0;
  opacity: none;
`;
