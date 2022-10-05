import { Header } from "./styles"
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import { BackPage } from "../Backpage"

type Props = {
  title?: string
  count?: string
}

export const HeaderPage = ({title, count}: Props) => {
  const navigate = useNavigate()
  return(
    <Header>
      <BackPage />
      <span>{count + " " + title}</span>
      <div style={{margin:'1rem 1rem'}}/>
    </Header>
  )
}