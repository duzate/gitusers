import { ReactNode } from "react"
import { FooterButton } from "../Footer";
import { Container, Wrapper } from "./styles"

type Props = {
  children: ReactNode;
}

export const LayoutDefault = ({children}: Props) => {
  return(
    <Wrapper>
      <Container>
        {children}
        <FooterButton/>
      </Container>
    </Wrapper>
  )
} 