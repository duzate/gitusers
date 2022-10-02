
import { LayoutDefault } from "../../components/LayoutDefault";
import { HeaderPage } from "../../components/HeaderPage";
import { useAuth } from "../../Hooks/Auth";

const Followers = () => {
  const {user} = useAuth()
  return(
    <LayoutDefault>
      <HeaderPage title={Number.parseInt(user.followers) > 1 ? "Seguindores" : 'Seguidor' } repo={user.followers} />
    </LayoutDefault>
  )
}

export default Followers;