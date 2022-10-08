import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Container = styled.div`
  display: flex;
  width: 30vw;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.hover};

  svg {
    fill: ${theme.colors.white};
    margin-right: 1rem;
    font-size: 1.2rem;
    width: 2rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  span {
    margin-left: 1rem;
  }
`;
