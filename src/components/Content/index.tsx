import { Container } from "./styles"

type Props = {
  text?: string | null
}
export const Content = ({text}: Props) => {
  return(
    <Container>
      <span>
        {text}
      </span>
    </Container>
  )
}