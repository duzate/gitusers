import { ReactNode } from "react"
import { Footer } from "../Footer";
import { Container, Wrapper } from "./styles"

type Props = {
  children: ReactNode;
}

export const LayoutDefault = ({children}: Props) => {
  return(
    <Wrapper>
      <Container>
        {children}
        <Footer/>
      </Container>
    </Wrapper>
  )
} 