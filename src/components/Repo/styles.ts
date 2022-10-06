import styled  from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Container = styled.div`
  display: flex;
  width: 30vw;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.line};
`;

export const Title = styled.div`
  display: flex;
  width: 30vw;

  span {
    font-size: 1.5rem;
    text-transform: lowercase;      
  }
`;

export const Description = styled.div`
  display: flex;
  width: 30vw;
  font-size: 1rem;
  padding: 0 0 0 1.3rem;

  span {
    padding: 0 1.3rem 1.3rem 0;
    text-align: justify;
  }
`

export const Infos = styled.div`
  width: 30vw;
  display: flex;
  font-size: 1.3rem;
  padding: 0 1.6rem 1.3rem 1.3rem;
  justify-content: space-between;
  align-items: center;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    
  span {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    height: 1rem;
  }
    
  svg { 
    display: flex;
    color: ${theme.colors.git};
    margin-right: .3rem;
  }
`;

type Props = {
  isPrivate?: boolean;
}

export const Padlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({isPrivate}: Props) => isPrivate ? theme.colors.warn : theme.colors.on };
  }
`;
