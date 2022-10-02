
import { LayoutDefault } from "../../components/LayoutDefault";
import { HeaderPage } from "../../components/HeaderPage";
import { useAuth } from "../../Hooks/Auth";

const Following = () => {
  const {user} = useAuth()
  return(
    <LayoutDefault>
      <HeaderPage title="Seguindo" repo={user.following} />
    </LayoutDefault>
  )
}

export default Following;