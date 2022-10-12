
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { Container } from './styles';


export const BackPage = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <FaArrowLeft onClick={() => navigate(-1)}/>
    </Container>
  )
}