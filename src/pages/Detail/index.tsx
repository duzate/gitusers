
import { Header, Contact } from "./styles";
import { FiLogIn } from 'react-icons/fi'
import { useAuth } from "../../Hooks/Auth";
import { Footer } from "../../components/Footer";
import { LayoutDefault } from "../../components/LayoutDefault";
import { Aside } from "../../components/Aside";
import { Log } from "../../components/Log";
import { BackPage } from "../../components/Backpage";
import { Avatar } from "../../components/Avatar";
import { Stripes } from "../../components/Stripe";
import { Content } from "../../components/Content";

const Detail = () => {
  const {user, setUser} = useAuth();
  return(
    <LayoutDefault>
      <Header>
        <BackPage/>
        <span>
          #{user?.login}
        </span>
        <Log title="Salvar" icon={FiLogIn} onClick={()=>setUser(null)} />
      </Header>
      <Avatar name={user?.login} urlImg={user?.avatar_url} length={7} position={3.5} />
      <Aside title={user?.name}/>
      <Contact>
        <span>
          {user?.email}
        </span>
        <span>
          {user?.location}
        </span>
      </Contact>
      <Stripes disabled/>
      <Aside title="BIO"/>
      <Content text={user?.bio}/>
      <Footer/>
    </LayoutDefault>
    )
}

export default Detail;