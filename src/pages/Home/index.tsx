
import { Avatar, Header, Logout, Profile, Contact, Stripe, Bio, Content } from "./styles";
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/Auth";
import { Button } from "../../components/Button";
import { UserProps } from "../../@types/User";
import { Footer } from "../../components/Footer";
import { LayoutDefault } from "../../components/LayoutDefault";
import { Aside } from "../../components/Aside";

const Home = () => {
  const {user, setUser, setUsername} = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    setUsername('')
    setUser({} as UserProps)
    localStorage.removeItem('user')
    localStorage.removeItem('username')
    navigate('/login')
  }  

  return(
    <LayoutDefault>
      <Header>
        <span>
          #{user.login}
        </span>
        <Logout onClick={handleLogout}>
          <span>
            Sair
          </span>
          <FiLogOut/>
        </Logout>
      </Header>
      <Avatar>
        <img src={user.avatar_url}/>
      </Avatar>
      <Profile>
        <Aside title={user.name}/>
      </Profile>
      <Contact>
        <span>
          {user.email}
        </span>
        <span>
          {user.location}
        </span>
      </Contact>
      <Stripe>
        <Button title="Seguidores" number={user.followers} link={user.followers_url} />
        <Button title="Seguindo" number={user.following} link={user.following_url} />
        <Button title="Repos" number={user.public_repos} link={user.public_repos} />
      </Stripe>
      <Bio>
        <Aside title="BIO"/>
      </Bio>
      <Content>
        {user.bio}
      </Content>
      <Footer/>
    </LayoutDefault>
    )
}

export default Home;