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
  justify-content: center;
  align-items: center;  
  width: 30vw;
  height: 100vh;
  background-color: ${theme.colors.background};
  border-radius: .8em;

  svg {
    color: #FFCE00;
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 25vw;
  height: 3rem;
  border-radius: .6em;
  margin-top: 2.2em;
  border: none;
  padding: 1em 1em;
  outline: none;
  font-size: 1.25em;
  
  :hover {
    border: none;
  }
  :focus{
    border: none;
  }
`;

export const Button = styled.button`
  height: 3rem;
  width: 25vw;
  font-size: 1.25em;
  border-radius: .6em;
  margin-top: 1.2em;
  border: none;
  background-color: ${theme.colors.git};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    margin-right: .8em;
    font-size: 1em;
    font-weight: bold;
  }

  svg {
    fill: ${theme.colors.black};
    font-size: 1em;
  }
`

