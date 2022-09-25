
import { Wrapper, Avatar, Container, Header, Logout, Profile, Contact, Stripe, Bio, Content } from "../global/styles/Home";
import { FiLogOut } from 'react-icons/fi'
import { AsideBar } from "../components/Aside";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import { Button } from "../components/Button";
import { Aside } from "../components/Aside/styles";
import { UserProps } from "../providers/Auth";

const Home = () => {
  const {user, setUser, setUsername} = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login')
    setUsername('')
    setUser({} as  UserProps)
    localStorage.setItem('user', '')
    localStorage.setItem('username', '')
  }
  console.log(user);
  

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
            duzate@gmail.com
          </span>
          <span>
            Ananindeua/PA
          </span>
        </Contact>
        <Stripe>
          <Button title="Seguidores" number={user.followers}/>
          <Button title="Seguindo" number={user.following}/>
          <Button title="Repos" number={user.public_repos}/>
        </Stripe>
        <Bio>
          <Aside/>
          <span>BIO</span>
        </Bio>
        <Content>
          {user.bio}
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Home;