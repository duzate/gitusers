
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi"
import { FiStar } from "react-icons/fi"
import { Aside } from "../Aside"
import { Container, Description, Infos, Padlock, Stars, Title } from "./styles"

type Props = {
  name: string,
  description: string,
  isPrivate: boolean,
  stars: string
}
export const Repo = ({name, description, isPrivate, stars}: Props) => {
  return(
    <Container>
      <Title>
        <Aside title={name}/>
      </Title>
      <Description>
        <span>
          {description}
        </span>
      </Description>
      <Infos>
        <Stars>
          <FiStar/>
          <span>
           {stars}
          </span>
        </Stars>
        <Padlock isPrivate={isPrivate} >
          {
            isPrivate
            ?
            <BiLockAlt/>
            : 
            <BiLockOpenAlt/> 
          }
        </Padlock>
        
      </Infos>
    </Container>
  )
}
