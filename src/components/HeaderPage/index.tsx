import { Header } from "./styles"
import { FaArrowLeft } from 'react-icons/fa'

type Props = {
  title: string
  repo: string
}

export const HeaderPage = ({title, repo}: Props) => {
  
  return(
    <Header>
      <FaArrowLeft onClick={history.back}/>
      <span>{repo + " " + title}</span>
      <div style={{margin:'1rem 1rem'}}/>
    </Header>
  )
}