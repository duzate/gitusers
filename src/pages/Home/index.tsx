
import { Log } from "../../components/Log";
import { useAuth } from "../../Hooks/Auth";
import { Aside } from "../../components/Aside";
import { Avatar } from "../../components/Avatar";
import { Footer } from "../../components/Footer";
import { Stripes } from "../../components/Stripe";
import { LayoutDefault } from "../../components/LayoutDefault";

import { FiLogOut } from 'react-icons/fi'
import { Header, Contact } from "./styles";
import { Content } from "../../components/Content";

const Home = () => {
  const {user, handleLogout} = useAuth();
  
  return(
    <LayoutDefault>
      <Header>
        <span>
          #{user?.login}
        </span>
        <Log icon={FiLogOut} title="Sair" onClick={handleLogout}/>
      </Header>
      <Avatar length={7} name={user?.login} position={3.5} urlImg={user?.avatar_url} />
      <Aside title={user?.name}/>
      <Contact>
        <span>
          {user?.email}
        </span>
        <span>
          {user?.location}
        </span>
      </Contact>
      <Stripes/>
      <Aside title="BIO"/>
      <Content text={user?.bio}/>
      <Footer/>
    </LayoutDefault>
    )
}

export default Home;