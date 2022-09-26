import React from "react";
import { Button, Container, Input, Wrapper } from "../global/styles/Login";
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";

const Login = () => {
  const {setUser, username, setUsername} = useAuth()
  const navigate = useNavigate();

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleSignin = async () => {
    if(!username) return console.log('Erro');
  
    try {
      const response = await api.get(username)
      localStorage.setItem('username', username)
      localStorage.setItem('user', JSON.stringify(response.data))
      setUser(response.data)
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