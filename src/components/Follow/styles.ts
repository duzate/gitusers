import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Container = styled.div`
  display: flex;
  width: 30vw;
  margin: 1rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.hover};
  padding: 0 0 1.3rem 0;
  
  svg {
    fill: ${theme.colors.white};
    margin: .5rem;
    font-size: 1.2rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    margin-left: 1rem;
  }
`;

export const Avatar = styled.div`
  width:  3rem;
  height: 3rem;

  img{
    height: 3rem;
    width:  3rem;
    border: 2px solid ${theme.colors.white};
    border-radius: 50rem;
  }
`