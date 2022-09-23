import styled from "styled-components";
import { theme } from "./Themes";

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
  min-width: 375px;
  max-height: 812px;
  background-color: ${theme.colors.background};
  border-radius: 12px;

  svg {
    color: #FFCE00;
    margin: 0;
    height: 100px;
  }
`;

export const Input = styled.input`
  width: 339px;
  height: 56px;
  border-radius: 12px;
  margin-top: 50px;
  border: none;
  padding: 15px 20px;
  outline: none;
  font-size: 20px;
  &:hover {
    border: none;
  }
  &:focus{
    border: none;
  }
`;

export const Button = styled.button`
  height: 56px;
  width: 339px;
  border-radius: 12px;
  margin-top: 19px;
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
    margin-right: 10px;
    font-size: 24px;
    font-weight: bold;
  }

  svg {
    fill: ${theme.colors.black};
    font-size: 18px;
  }
`

