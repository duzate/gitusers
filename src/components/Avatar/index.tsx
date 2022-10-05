import { Container } from "./styles"

type Props = {
  img: string,
  alt: string,
  length: number
}

export const Avatar = ({img, alt, length}: Props) => {
  
  return (
    <Container length={length}>
      <img src={img} alt={alt} />
    </Container>
  )
}