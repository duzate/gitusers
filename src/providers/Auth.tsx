import React, { createContext, useState, useEffect } from 'react';
import { UserContextProps } from '../@types/UserContext';
import { UserProps } from '../@types/User';

export const UserContext = createContext<UserContextProps>(null!);

type Props = {
  children?: React.ReactNode
};

export const UserProvider = ({ children }: Props) => {
  const [username, setUsername] = useState("")
  useEffect(()=> {
    const usernameStorage = localStorage.getItem('username')
    usernameStorage ? setUsername(usernameStorage) : ''
  }, [])

  const [user, setUser] = useState<UserProps | null>(null)
  useEffect(()=> {
    const userStorage = localStorage.getItem('user')
    userStorage ? setUser(JSON.parse(userStorage)) : null
  }, [])

  return (
    <UserContext.Provider value={ {user, setUser, username, setUsername} }>
      {children}
    </UserContext.Provider>
  )
}