import React, { ComponentType, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Tabs } from './styles'
type TabProps = {
  icon: ComponentType;
  title: string;
  link: string;
}

export const Tab = ({title, icon: Icon, link}: TabProps) => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false);
  return(
    <Tabs onClick={() => {navigate(`${link}`); setIsActive(true)} } isActive={isActive} >
      {Icon && <Icon/>}
      <span>
        {title}
      </span>
    </Tabs>
  )
}