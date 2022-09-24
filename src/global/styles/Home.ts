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
  align-items: center;  
  min-width: 375px;
  max-height: 812px;
  background-color: ${theme.colors.background};
  border-radius: 12px;
`;

export const Header = styled.div`
  display: flex;
  min-width: 375px;
  max-height: 20%;
  background-color: ${theme.colors.header};
  border-radius: 12px;
  justify-content: space-between;
  span {
    margin: 20px 10px;
    font-size: 17px;
    font-weight: bold;
    color: ${theme.colors.white};
    font-family: sans-serif;
    height: 20%;
  }
`;

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  span {
    display: flex;
    font-size: 17px;
    margin: 20px 10px;
    height: 17px;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.line};
    font-size: 17px;
    margin: 20px 10px 10px 0px;
    height: 20px;
  }
`;

export const Avatar = styled.div`
  min-width: 115px;
  max-height: 115px;

  img{
    border: 2px solid ${theme.colors.white};
    border-radius: 100px;
    margin-top: -57.5px;
  }
`
export const Profile = styled.div`
  min-width: 375px;
  display: flex;
  span {
    text-align: center;
  }
`