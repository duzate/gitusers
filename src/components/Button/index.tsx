import { Container, Count } from "./styles"

type ButtonProps = {
  title: string;
  number: string;
}
export const Button = ({title, number}: ButtonProps)  => {
  return(
    <Container>
      <Count>
        {number}
      </Count>
      <span>
        {title}
      </span>
    </Container>
  )
}