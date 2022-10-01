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
  width: 30vw;
  height: 100vh;
  background-color: ${theme.colors.background};
  border-radius: .8rem;
  color: ${theme.colors.white};
`;

export const Header = styled.div`
  display: flex;
  width: 30vw;
  height: 20vh;
  background-color: ${theme.colors.header};
  border-radius: .6em .6em 0 0;
  justify-content: space-between;

  span {
    margin: 1rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.white};
    font-family: sans-serif;
  }
`;

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  span {
    display: flex;
    font-size: 1rem;
    margin: 1rem .5rem;
    height: 1em;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.line};
    font-size: 1.1rem;
    margin: 1rem 1rem 1rem 0;
    height: 1.1rem;
  }
`;

export const Avatar = styled.div`
  width:  7rem;
  height: 7rem;

  img{
    height: 7rem;
    width: 7rem;
    border: 2px solid ${theme.colors.white};
    border-radius: 50rem;
    margin-top: -6vh;
  }
`
export const Profile = styled.div`
  width: 30vw;
  display: flex;
  span {
    display: flex;
    align-items: center;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin-left: 4vw;
`;

export const Stripe = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw;
  height: 12vh;
  background-color: ${theme.colors.stripe};
  margin-top: 6vh;
`;

export const Bio = styled.div`
  display: flex;
  width: 30vw;
  margin: 1rem;

  span {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export const Content = styled.div`
  width: 30vw;
  padding: 0 1.5rem;
  text-align: justify;
`;
