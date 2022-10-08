import { useNavigate } from "react-router-dom"
import { useAuth } from "../../Hooks/Auth"
import { ButtonStripe } from "../ButtonStripe"
import { Container } from "./styles"


export const Stripes = ({...rest}) => {
  const navigate = useNavigate()
  const {user} = useAuth()
  return (
    
    <Container >
      <ButtonStripe {...rest} number={user?.followers} title="Seguidores" onClick={() => navigate('/followers')}/>
      <ButtonStripe {...rest} number={user?.following} title="Seguindo" onClick={() => navigate('/following')}/>
      <ButtonStripe {...rest} number={user?.public_repos} title="Repos" onClick={() => navigate('/repos')}/>
    </Container>
  )
}