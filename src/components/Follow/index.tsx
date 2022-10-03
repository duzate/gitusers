import { AsideBar } from "../Aside/styles"
import { Avatar, Container, Profile } from "./styles"
import { AiOutlineArrowRight } from 'react-icons/ai'

type Props = {
  avatar: string,
  login: string,
}

export const Follow = ({avatar, login }: Props) => {
  return(
    <Container>
      <Profile>
        <AsideBar/>
        <Avatar>
          <img src={avatar} alt={login} />
        </Avatar>
        <span>#{login}</span>
      </Profile>
      <AiOutlineArrowRight/>
    </Container>
  )
}