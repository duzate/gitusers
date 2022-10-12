import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const HeaderBackground = styled.div`
  display: flex;
  width: 30vw;
  height: 20vh;
  background-color: ${theme.colors.header};
  border-radius: .6em .6em 0 0;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  width: 30vw;
  height: 3vh;
  justify-content: space-between;
  margin: 1rem 0;

  span {
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.white};
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    flex: 1;
  }
`;



export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin-left: 2vw;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
`;
