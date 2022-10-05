
import { Avatar, Header, Profile, Contact, Stripe, Bio, Content } from "./styles";
import { FiLogIn } from 'react-icons/fi'
import { useAuth } from "../../Hooks/Auth";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { LayoutDefault } from "../../components/LayoutDefault";
import { Aside } from "../../components/Aside";
import { Log } from "../../components/Log";
import { BackPage } from "../../components/Backpage";

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
      <Avatar>
        <img src={user?.avatar_url}/>
      </Avatar>
      <Profile>
        <Aside title={user?.name}/>
      </Profile>
      <Contact>
        <span>
          {user?.email}
        </span>
        <span>
          {user?.location}
        </span>
      </Contact>
      <Stripe>
        <Button title="Seguidores" number={user?.followers}  />
        <Button title="Seguindo" number={user?.following}  />
        <Button title="Repos" number={user?.public_repos} />
      </Stripe>
      <Aside title="BIO"/>
      <Content>
        {user?.bio}
      </Content>
      <Footer/>
    </LayoutDefault>
    )
}

export default Detail;