
import { LayoutDefault } from "../../components/LayoutDefault";
import { HeaderPage } from "../../components/HeaderPage";
import { useAuth } from "../../Hooks/Auth";
import { useFollowers } from "../../Hooks/Followers";
import { Follow } from "../../components/Follow";
import { Scroll } from "../../components/Scroll";

const Followers = () => {
  const {user} = useAuth()
  const {followers} = useFollowers()
  return(
    <LayoutDefault>
      <HeaderPage title={!user?.followers ? "Seguindores" : 'Seguidor' } count={user?.followers} />
      <Scroll>
        {
          followers.map(follower => (
            <Follow key={follower.id} avatar={follower.avatar_url} login={follower.login} />
          ))
        }
      </Scroll>
    </LayoutDefault>
  )
}

export default Followers;