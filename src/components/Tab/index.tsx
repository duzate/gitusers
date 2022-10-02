import { ComponentType, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelect } from '../../Hooks/Select';
import { Tabs } from './styles'

type TabProps = {
  icon: ComponentType;
  title: string;
  isActive?: boolean;
  onClick: () => void
}

export const Tab = ({title, icon: Icon, isActive = false, ...rest}: TabProps) => {
  const {select} = useSelect();
  
  return(
    <Tabs {...rest} isActive={isActive}>
      <Icon/>
      <span>
        {title}
      </span>
    </Tabs>
  )
}