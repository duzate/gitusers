import { Header } from "./styles"
import { useNavigate } from "react-router-dom"
import { BackPage } from "../Backpage"

type Props = {
  title?: string
  count?: string
}

export const HeaderPage = ({title, count}: Props) => {

  return(
    <Header>
      <BackPage />
      <span>{count + " " + title}</span>
      <div style={{width: '4rem'}}/>
    </Header>
  )
}