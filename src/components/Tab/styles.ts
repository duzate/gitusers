
import styled from "styled-components";
import { theme } from "../../global/styles/Themes";

type TabsProps = {
  isActive?: boolean
}
export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: ${({isActive}:TabsProps) => isActive ? theme.colors.black : theme.colors.hover };
  width: 6rem;

  :hover {
    color: ${theme.colors.black}
  }

  svg {
    font-size: 1.6rem;
  }

  span {
    font-weight: bold;
    font-size: .9rem;
  }
`;