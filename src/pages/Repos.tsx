
import { LayoutDefault } from "../components/Default";
import { HeaderPage } from "../components/HeaderPage";
import { useAuth } from "../Hooks/Auth";

const Repos = () => {
  const {user} = useAuth()
  return(
    <LayoutDefault>
      <HeaderPage title={Number.parseInt(user.public_repos) > 1 ? "Repositórios" : "Repositório"} repo={user.public_repos}/>
        
    </LayoutDefault>
  )
}

export default Repos;