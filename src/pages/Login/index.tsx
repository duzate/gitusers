import React, { useState } from "react";
import { useApi } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../Hooks/Auth";
import { useRepos } from "../../Hooks/Repos";
import { useFollowers } from "../../Hooks/Followers";
import { useFollowing } from "../../Hooks/Following";

import { Button, Container, ContainerInput, Input, Label, Wrapper } from "./styles";
import { FaGithub, FaArrowRight } from 'react-icons/fa';

const Login = () => {
  const api = useApi();
  const navigate = useNavigate();

  const [error, setError] = useState(false)

  const { setRepos } = useRepos();
  const { setFollowers } = useFollowers();
  const { setFollowing } = useFollowing();
  const { setUser, username, setUsername } = useAuth();


  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleLogin = async () => {
    if (!username) return setError(true);

    try {
      const login = await api.login(username);
      const repos = await api.repos(username);
      const followers = await api.followers(username);
      const following = await api.following(username);
      localStorage.setItem('username', username);
      localStorage.setItem('user', JSON.stringify(login));
      localStorage.setItem('repos', JSON.stringify(repos));
      localStorage.setItem('followers', JSON.stringify(followers));
      localStorage.setItem('following', JSON.stringify(following));
      setUser(login);
      setRepos(repos);
      setFollowers(followers);
      setFollowing(following);
      navigate('/')
    }
    catch (err) {
      return console.log(err)
    }
  }

  return (
    <Wrapper>
      <Container>
        <FaGithub size={100} />
        <ContainerInput>
          <Input placeholder="Usuário" onChange={handleUsername} value={username} name="username" />
          <Label Error={error} >Campo obrigatório</Label>
        </ContainerInput>
        <Button onClick={handleLogin}>
          <span>
            ENTRAR
          </span>
          <FaArrowRight />
        </Button>
      </Container>
    </Wrapper>
  )
}

export default Login;
