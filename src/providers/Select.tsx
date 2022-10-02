import React, { createContext, useState, useEffect } from 'react';
import { SelectContextProps } from '../@types/SelectContext';

export const SelectContext = createContext<SelectContextProps>({} as SelectContextProps);

type Props = {
  children?: React.ReactNode
};

export const SelectProvider = ({ children }: Props) => {
  const [select, setSelect] = useState('1')
  
  useEffect(()=> {
    const selectStorage = localStorage.getItem('selected')
    selectStorage ? setSelect(selectStorage) : ''
  }, [])
  
  return (
    <SelectContext.Provider value={ {select,setSelect} }>
      {children}
    </SelectContext.Provider>
  )
}