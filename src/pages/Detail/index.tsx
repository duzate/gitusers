
import { HeaderBackground, Header, Contact } from "./styles";
import { FiLogIn } from 'react-icons/fi'
import { Log } from "../../components/Log";
import { Aside } from "../../components/Aside";
import { Footer } from "../../components/Footer";
import { Avatar } from "../../components/Avatar";
import { Stripes } from "../../components/Stripe";
import { Content } from "../../components/Content";
import { BackPage } from "../../components/Backpage";
import { LayoutDefault } from "../../components/LayoutDefault";
import { useFollow } from "../../Hooks/Follow";
import { useAuth } from "../../Hooks/Auth";
import { useApi } from "../../services/api";
import { useRepos } from "../../Hooks/Repos";
import { useFollowers } from "../../Hooks/Followers";
import { useFollowing } from "../../Hooks/Following";

const Detail = () => {
  const api = useApi();
  const {follow} = useFollow();
  const {setRepos} = useRepos();
  const {setFollowers} = useFollowers();
  const {setFollowing} = useFollowing();
  const {setUser, setUsername} = useAuth()
  
  return(
    <LayoutDefault>
      <HeaderBackground>
        <Header>
          <BackPage/>
          <span>
            #{follow?.login}
          </span>
          <Log icon={FiLogIn} title="Salvar"
            onClick={async () => {
              try {
                const repos = await api.repos(follow?.login);
                const followers = await api.followers(follow?.login);
                const following = await api.following(follow?.login);
                localStorage.setItem('username', follow?.login);
                localStorage.setItem('repos', JSON.stringify(repos));
                localStorage.setItem('followers', JSON.stringify(followers));
                localStorage.setItem('following', JSON.stringify(following));

                setRepos(repos);
                setFollowers(followers);
                setFollowing(following);
              setUsername(follow?.login)
              setUser(follow)
              }
              catch (err) {
                return console.log(err)
              }
            }}/>
        </Header>
      </HeaderBackground>
      <Avatar name={follow?.login} urlImg={follow?.avatar_url} length={7} position={3.5} />
      <Aside title={follow?.name}/>
      <Contact>
        <span>
          {follow?.email}
        </span>
        <span>
          {follow?.location}
        </span>
      </Contact>
      <Stripes disabled/>
      <Aside title="BIO"/>
      <Content text={follow?.bio}/>
      <Footer/>
    </LayoutDefault>
    )
}

export default Detail;