
import { Container, Profile } from "./styles"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Aside } from "../Aside"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../Avatar"

type Props = {
  avatar: string,
  login: string,
}

export const Follow = ({avatar, login }: Props) => {

  const navigate = useNavigate();
  return(
    <Container>
      <Profile>
        <Aside/>
        <Avatar name={login} urlImg={avatar} length={4} />
        <span>#{login}</span>
      </Profile>
      <AiOutlineArrowRight onClick={() => navigate(`${login}`)}/>
    </Container>
  )
}