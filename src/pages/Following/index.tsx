
import { LayoutDefault } from "../../components/LayoutDefault";
import { HeaderPage } from "../../components/HeaderPage";
import { useAuth } from "../../Hooks/Auth";
import { Follow } from "../../components/Follow";
import { useFollowing } from "../../Hooks/Following";

const Following = () => {
  const {user} = useAuth()
  const {following} = useFollowing()
  return(
    <LayoutDefault>
      <HeaderPage title="Seguindo" count={user.following} />
      {
        following.map(follow => (
          <Follow key={follow.id} avatar={follow.avatar_url} login={follow.login} />
        ))
      }
    </LayoutDefault>
  )
}

export default Following;