import styled from "styled-components";
import { theme } from "../../global/styles/Themes";


type Props = {
  length?: number;
  position?: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ position}: Props) => `-${position}rem`};

  img{
    height: ${({ length}: Props) => `${length}rem`};
    width: ${({ length}: Props) => `${length}rem`};
    border: 2px solid ${theme.colors.white};
    border-radius: 50rem;
  }
`;
