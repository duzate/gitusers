import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${theme.colors.white};
  width: 30vw;
  height: 10vh;
  border-radius: .6em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
