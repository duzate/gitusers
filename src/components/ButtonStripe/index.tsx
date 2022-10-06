
import { Container, Count } from "./styles"

type ButtonProps = {
  title?: string;
  number?: string;
  onClick: () => void;
}

export const ButtonStripe =  ({title, number, ...rest}: ButtonProps)  => {

  return(
    <Container {...rest}>
      <Count>
        {number}
      </Count>
      <span>
        {title}
      </span>
    </Container>
  )
}