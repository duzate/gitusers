
import { Wrapper, Avatar, Container, Header, Logout, Profile, Contact, Stripe, Bio, Content } from "../global/styles/Home";
import { FiLogOut } from 'react-icons/fi'
import { AsideBar } from "../components/Aside";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import { Button } from "../components/Button";
import { Aside } from "../components/Aside/styles";
import { UserProps } from "../@types/User";
import { Footer } from "../components/Footer";
import { LayoutDefault } from "../components/Default";

const Home = () => {
  const {user, setUser, setUsername} = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    setUsername('')
    setUser({} as  UserProps)
    localStorage.removeItem('user')
    localStorage.removeItem('username')
    navigate('/login')
  }  

  return(
    <Wrapper>
      <Container>
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
        <AsideBar/>
        <span>
          {(user.name)}
        </span>
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
          <Aside/>
          <span>BIO</span>
        </Bio>
        <Content>
          {user.bio}
        </Content>
        <Footer/>
    </Container>
    </Wrapper>
  )
}

export default Home;