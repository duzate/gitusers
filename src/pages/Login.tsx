import React, { useState } from "react";
import { Button, Container, Input, Wrapper } from "../global/styles/Login";
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleSignin = async () => {
    if(!username) return console.log('Erro');
  
    try {
      const response = await api.get(username)
      console.log(response.data);
      navigate("/home")
      
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