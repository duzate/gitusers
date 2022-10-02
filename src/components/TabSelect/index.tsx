import { useNavigate } from 'react-router-dom';
import { useSelect } from '../../Hooks/Select';
import {options} from '../../util/options';
import { Tab } from '../Tab';
type Props = {
  tabSelected: string;
}

export function TabSelect({ 
  tabSelected, 
 
}: Props){
  const navigate = useNavigate()
  const {setSelect} = useSelect()
  return(
    <>
      {
        options.map(option => (
          <Tab
            key={option.id}
            title={option.title}
            icon={option.icon}
            isActive={option.id === tabSelected}
            onClick={() => {setSelect(option.id); localStorage.setItem('selected',option.id); navigate(option.link)} }
          />
        ))
      }
    </>
  );
}