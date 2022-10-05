import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
  background-color: ${theme.colors.background};
  border-radius: .8rem;
  color: ${theme.colors.white};
`;