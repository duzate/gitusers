
import { useSelect } from '../../Hooks/Select';
import { TabSelect } from '../TabSelect'
import { Container } from "./styles"

export const Footer = () => {
  const {select} = useSelect();
  console.log(select);
  return(
    <Container>
      <TabSelect 
        tabSelected={select}
      />
    </Container>
  )
}