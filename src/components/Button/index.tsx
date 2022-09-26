import { useAuth } from "../../Hooks/Auth";
import { api } from "../../services/api";
import { Container, Count } from "./styles"

type ButtonProps = {
  title: string;
  number: string;
  link: string;
}

export const Button =  ({title, number, link}: ButtonProps)  => {
  const { user } = useAuth()
  const handlePage = async () => {
    const response = await fetch(link)
  } 
  return(
    <Container onClick={handlePage}>
      <Count>
        {number}
      </Count>
      <span>
        {title}
      </span>
    </Container>
  )
}