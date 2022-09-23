import React from "react";
import { Button, Container, Input, Wrapper } from "../global/styles/Login";
import { FaGithub, FaArrowRight } from 'react-icons/fa';
const Login = () => {
  return(
    <Wrapper>
      <Container>
        <FaGithub size={100}/>
        <Input placeholder="Usuário"/>
        <Button>
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