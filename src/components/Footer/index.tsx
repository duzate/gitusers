
import { useSelect } from '../../Hooks/Select';
import { TabSelect } from '../TabSelect'
import { Container } from "./styles"

export const Footer = () => {
  const {select} = useSelect();
  return(
    <Container>
      <TabSelect 
        tabSelected={select}
      />
    </Container>
  )
}