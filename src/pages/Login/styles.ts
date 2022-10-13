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
  border-radius: .8rem;

  svg {
    color: #FFCE00;
    margin: 0;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 25vw;
  height: 3rem;
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
  border-radius: .6rem;
  padding: 1rem 1rem;
  margin-top: 2rem;
`;

type LabelProps = {
  Error: boolean
}

export const Label = styled.label`
  color: ${theme.colors.warn};
  width: 50%;
  text-align: center;
  display: ${({ Error }: LabelProps) => Error ? '' : 'none'};
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: .6rem;
  border: none;
  outline: none;
  font-size: 1.25rem;
`;

export const Button = styled.button`
  height: 3rem;
  width: 25vw;
  font-size: 1.25rem;
  border-radius: .6rem;
  margin-top: 1.2rem;
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
    margin-right: .8rem;
    font-size: 1rem;
    font-weight: bold;
  }

  svg {
    fill: ${theme.colors.black};
    font-size: 1em;
  }
`

