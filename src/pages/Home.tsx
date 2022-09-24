
import { Avatar, Container, Header, Logout, Profile } from "../global/styles/Home";
import { Wrapper } from "../global/styles/Login";
import { FiLogOut } from 'react-icons/fi'
import { AsideBar } from "../components/Aside";
const Home = () => {
  return(
    <Wrapper>
      <Container>
        <Header>
          <span>
            #duzate
          </span>
          <Logout >
            <span>
              Sair
            </span>
            <FiLogOut/>
          </Logout>
        </Header>
          <Avatar>
            <img src='https://github.com/duzate.png' />
          </Avatar>
        <Profile>
          <AsideBar/>
          <span>
            Eduardo Araujo
          </span>
        </Profile>
      </Container>
    </Wrapper>
  )
}

export default Home;