import React, { createContext, useState, useEffect } from 'react';
import { FollowContextProps } from '../@types/FollowContext';
import { UserProps } from '../@types/User';

export const FollowContext = createContext<FollowContextProps>(null!);

type Props = {
  children?: React.ReactNode
};

export const FollowProvider = ({ children }: Props) => {
  
  const [follow, setFollow] = useState<UserProps | null>(null)

  useEffect(()=> {
    const FollowingStorage = localStorage.getItem('follow')
    FollowingStorage ? setFollow(JSON.parse(FollowingStorage)) : ''
  }, [])

  return (
    <FollowContext.Provider value={ {follow, setFollow} }>
      {children}
    </FollowContext.Provider>
  )
}