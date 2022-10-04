
import { LayoutDefault } from "../../components/LayoutDefault";
import { HeaderPage } from "../../components/HeaderPage";
import { useAuth } from "../../Hooks/Auth";
import { Follow } from "../../components/Follow";
import { useFollowing } from "../../Hooks/Following";
import { Scroll } from "../../components/Scroll";

const Following = () => {
  const {user} = useAuth()
  const {following} = useFollowing()
  return(
    <LayoutDefault>
      <HeaderPage title="Seguindo" count={user?.following} />
      <Scroll>
        {
          following.map(follow => (
            <Follow key={follow.id} avatar={follow.avatar_url} login={follow.login} />
          ))
        }
      </Scroll>
    </LayoutDefault>
  )
}

export default Following;