import { AsideBar, Container } from "./styles"

type Props = {
  title?: string;
}

export const Aside = ({title}: Props) => {
  return (
    <Container >
      <AsideBar/>
      <span>
        {title}
      </span>
    </Container>
  )
}