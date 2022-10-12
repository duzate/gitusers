
import { Container, Profile } from "./styles"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Aside } from "../Aside"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../Avatar"
import { useApi } from "../../services/api"
import { useFollow } from "../../Hooks/Follow"

type Props = {
  avatar: string,
  login: string,
}

export const Follow = ({avatar, login }: Props) => {
  const api = useApi()
  const navigate = useNavigate();
  const {setFollow} = useFollow()
  const handleFollow = async () => {
    const follow = await api.login(login);
    setFollow(follow)
    localStorage.setItem('follow', JSON.stringify(follow))
  }

  return(
    <Container>
      <Profile>
        <Aside/>
        <Avatar name={login} urlImg={avatar} length={4} />
        <span>#{login}</span>
      </Profile>
      <AiOutlineArrowRight 
        onClick={
          () => {
            handleFollow()
            navigate(`${login}`)
          }
        }
      />
    </Container>
  )
}