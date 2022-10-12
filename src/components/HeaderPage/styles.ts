import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  height: 10vh;
  background-color: ${theme.colors.header};
  border-radius: .6em .6em 0 0;

  span {
    margin: 1rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.white};
    font-family: sans-serif;
    text-transform: lowercase;
  }
`;