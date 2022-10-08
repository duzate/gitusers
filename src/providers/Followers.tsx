import React, { createContext, useState, useEffect } from 'react';
import { FollowProps } from '../@types/Follow';
import { FollowersContextProps } from '../@types/FollowersContext';

export const FollowersContext = createContext({} as FollowersContextProps);

type Props = {
  children?: React.ReactNode
};

export const FollowersProvider = ({ children }: Props) => {
  
  const [followers, setFollowers] = useState([{}] as FollowProps)

  useEffect(()=> {
    const FollowersStorage = localStorage.getItem('followers')
    FollowersStorage ? setFollowers(JSON.parse(FollowersStorage)) : []
  }, [])

  return (
    <FollowersContext.Provider value={ {followers, setFollowers} }>
      {children}
    </FollowersContext.Provider>
  )
}