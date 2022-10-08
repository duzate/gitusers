
import { useAuth } from "../Hooks/Auth"
import { useFollowers } from "../Hooks/Followers";
import { useFollowing } from "../Hooks/Following";
import { useRepos } from "../Hooks/Repos";
import Login from "../pages/Login"

export const RoutePrivete = ({children}: {children: JSX.Element}) => {
  const {user} = useAuth();
  const {repos} = useRepos();
  const {followers} = useFollowers();
  const {following} = useFollowing();
  
  if(!user && !repos && !followers && !following) {
    return <Login/>
  }  

  return children
}