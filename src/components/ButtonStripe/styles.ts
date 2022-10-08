import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Container = styled.button`
  cursor: pointer;
  background: none;
  opacity: none;
  border: none;
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 8rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`;

export const Count = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  width: 2rem;

  

`;