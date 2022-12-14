import React, { createContext, useState, useEffect } from 'react';
import { UserProps } from '../@types/User';
import { useNavigate } from 'react-router-dom';
import { UserContextProps } from '../@types/UserContext';

export const UserContext = createContext<UserContextProps>(null!);

type Props = {
  children?: React.ReactNode
};

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [user, setUser] = useState<UserProps | null>(null)
  
  useEffect(()=> {
    const usernameStorage = localStorage.getItem('username')
    usernameStorage ? setUsername(usernameStorage) : ''
  }, [])

  useEffect(()=> {
    const userStorage = localStorage.getItem('user')
    userStorage ? setUser(JSON.parse(userStorage)) : null
  }, [])

  const handleLogout = () => {
    setUsername('')
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('username')
    localStorage.removeItem('followers')
    localStorage.removeItem('following')
    localStorage.removeItem('repos')
    navigate('/login')
  } 

  return (
    <UserContext.Provider value={ {user, setUser, username, setUsername, handleLogout} }>
      {children}
    </UserContext.Provider>
  )
}