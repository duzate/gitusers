import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

type Props = {
  text: string
}

export const Logs = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 5rem;

  span {
    font-size: 1rem;

  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({text}: Props) => text === 'Sair' ? theme.colors.warn : theme.colors.on};
    font-size: 2rem;
    height: 1.2rem;
  }
`;