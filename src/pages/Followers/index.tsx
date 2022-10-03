
import { LayoutDefault } from "../../components/LayoutDefault";
import { HeaderPage } from "../../components/HeaderPage";
import { useAuth } from "../../Hooks/Auth";
import { useFollowers } from "../../Hooks/Followers";
import { Follow } from "../../components/Follow";


const Followers = () => {
  const {user} = useAuth()
  const {followers} = useFollowers()
  return(
    <LayoutDefault>
      <HeaderPage title={Number.parseInt(user.followers) > 1 ? "Seguindores" : 'Seguidor' } count={user.followers} />
      {
          followers.map(follower => (
            <Follow key={follower.id} avatar={follower.avatar_url} login={follower.login} />
            ))
          }
    </LayoutDefault>
  )
}

export default Followers;