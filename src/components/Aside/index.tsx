import { AsideBar, Container } from "./styles"

type Props = {
  title: string;
}

export const Aside = ({title, ...rest}: Props) => {
  return (
    <Container >
      <AsideBar/>
      <span>
        {title}
      </span>
    </Container>
  )
}