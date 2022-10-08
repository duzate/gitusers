import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const  Header = styled.div`
  display: flex;
  width: 30vw;
  height: 20vh;
  background-color: ${theme.colors.header};
  border-radius: .6em .6em 0 0;
  justify-content: space-between;

  span {
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.white};
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    flex: 1;
  }

  svg {
    width: 3rem;
    font-size: 1.1rem;
    margin: 1rem 0;
    height: 1.1rem;
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