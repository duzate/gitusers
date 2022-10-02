import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

export const Container = styled.div`
  display: flex;
  span {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export const AsideBar = styled.div`
  content: "";
  background-color: ${theme.colors.git};
  width: 10px;
  height: 42px;
  border-radius: 0 8px 8px 0;
  margin-right: 14px;
`
