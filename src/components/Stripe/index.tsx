import { useNavigate } from "react-router-dom"
import { useAuth } from "../../Hooks/Auth"
import { ButtonStripe } from "../ButtonStripe"
import { Container } from "./styles"

type Props = {
  repos?: string;
  followers?: string;
  following?: string;
}

export const Stripes = ({ repos, followers, following, ...rest }: Props) => {
  const navigate = useNavigate()
  const { user } = useAuth()
  return (

    <Container >
      <ButtonStripe {...rest} number={followers} title="Seguidores" onClick={() => navigate('/followers')} />
      <ButtonStripe {...rest} number={following} title="Seguindo" onClick={() => navigate('/following')} />
      <ButtonStripe {...rest} number={repos} title="Repos" onClick={() => navigate('/repos')} />
    </Container>
  )
}
