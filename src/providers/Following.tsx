import React, { createContext, useState, useEffect } from 'react';
import { FollowProps } from '../@types/Follow';
import { FollowContextProps } from '../@types/FollowingContext';

export const FollowingContext = createContext({} as FollowContextProps);

type Props = {
  children?: React.ReactNode
};

export const FollowingProvider = ({ children }: Props) => {
  
  const [following, setFollowing] = useState([{}] as FollowProps)

  useEffect(()=> {
    const FollowingStorage = localStorage.getItem('following')
    FollowingStorage ? setFollowing(JSON.parse(FollowingStorage)) : []
  }, [])

  return (
    <FollowingContext.Provider value={ {following, setFollowing} }>
      {children}
    </FollowingContext.Provider>
  )
}