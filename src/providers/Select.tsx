import React, { createContext, useState, useEffect } from 'react';
import { SelectContextProps } from '../@types/SelectContext';
import { UserProps } from '../@types/User';

export const SelectContext = createContext<SelectContextProps>({} as SelectContextProps);

type Props = {
  children?: React.ReactNode
};

export const UserProvider = ({ children }: Props) => {
  const [isActive, setIsActive] = useState(false)
  
  useEffect(()=> {
    const selectStorage = localStorage.getItem('selected')
    selectStorage ? setIsActive(JSON.parse(selectStorage)) : ''
  }, [])

  return (
    <SelectContext.Provider value={ {isActive,setIsActive} }>
      {children}
    </SelectContext.Provider>
  )
}