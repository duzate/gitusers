import React, { createContext, useState, useEffect } from 'react';
import { ReposProps } from '../@types/Repos';
import { ReposContextProps } from '../@types/ReposContext';

export const ReposContext = createContext({} as ReposContextProps);

type Props = {
  children?: React.ReactNode
};

export const ReposProvider = ({ children }: Props) => {
  
  const [repos, setRepos] = useState([{}] as ReposProps)

  useEffect(()=> {
    const ReposStorage = localStorage.getItem('repos')
    ReposStorage ? setRepos(JSON.parse(ReposStorage)) : []
  }, [])

  return (
    <ReposContext.Provider value={ {repos, setRepos} }>
      {children}
    </ReposContext.Provider>
  )
}