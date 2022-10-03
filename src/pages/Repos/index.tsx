
import { LayoutDefault } from "../../components/LayoutDefault";
import { HeaderPage } from "../../components/HeaderPage";
import { useAuth } from "../../Hooks/Auth";
import { Repo } from "../../components/Repo/Index";
import { useRepos } from "../../Hooks/Repos";
import { Scroll } from "./styles";

const Repos = () => {
  const {user} = useAuth();
  const {repos} = useRepos();
  
  return(
    <LayoutDefault>
      <HeaderPage title={Number.parseInt(user.public_repos) > 1 ? "Repositórios" : "Repositório"} count={user.public_repos}/>  
        <Scroll>
        {
          repos.map(repo => (
            <Repo key={repo.id} description={repo.description} name={repo.name} isPrivate={repo.private} stars={repo.stargazers_count}/>
            ))
          }
        </Scroll>
    </LayoutDefault>
  )
}

export default Repos;