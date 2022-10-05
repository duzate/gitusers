
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'


export const BackPage = () => {
  const navigate = useNavigate()
  return (
    <FaArrowLeft onClick={() => navigate(-1)}/>
  )
}