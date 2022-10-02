import React from "react";
import { Button, Container, Input, Wrapper } from "./styles";
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { useApi } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/Auth";
import { useRepos } from "../../Hooks/Repos";

const Login = () => {
  const {setUser, username, setUsername} = useAuth();
  const {setRepos} = useRepos();
  const navigate = useNavigate();
  const api = useApi()
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleSignin = async () => {
    if(!username) return console.log('Erro');
  
    try {
      const login = await api.login(username)
      localStorage.setItem('username', username)
      localStorage.setItem('user', JSON.stringify(login))
      setUser(login)
      const repos = await api.repos(username);
      console.log(repos);
      
      localStorage.setItem('repos', JSON.stringify(repos))
      setRepos(repos)
      navigate('/home')
    }
    catch (err) {
      return console.log(err)
    }
  }

  return(
    <Wrapper>
      <Container>
        <FaGithub size={100}/>
        <Input placeholder="Usuário" onChange={handleUsername} value={username} name="username"/>
        <Button onClick={handleSignin}>
          <span>
            ENTRAR
          </span>
          <FaArrowRight/>
        </Button>
      </Container>
    </Wrapper>
  )
}

export default Login;