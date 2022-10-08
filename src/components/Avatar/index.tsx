import { Container } from "./styles"

type Props = {
  urlImg?: string,
  name?: string,
  length?: number
  position?: number
}

export const Avatar = ({urlImg, name, length, position}: Props) => {
  
  return (
    <Container length={length} position={position}>
      <img src={urlImg} alt={name} />
    </Container>
  )
}