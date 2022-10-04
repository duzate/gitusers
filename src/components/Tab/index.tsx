import { ComponentType, useState } from 'react'
import { Tabs } from './styles'

type TabProps = {
  icon: ComponentType;
  title: string;
  isActive?: boolean;
  onClick: () => void
}

export const Tab = ({ title, icon: Icon, isActive = false, ...rest}: TabProps) => {

  return(
    <Tabs {...rest} isActive={isActive}>
      <Icon/>
      <span>
        {title}
      </span>
    </Tabs>
  )
}