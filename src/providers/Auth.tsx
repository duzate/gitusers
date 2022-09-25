import React, { createContext, useState, useEffect } from 'react';

export type UserProps = {
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string
  starred_url: string, 
  public_repos: string, 
  public_gists: string, 
  followers: string, 
  following: string
}

type ContextProps = {
  username: string;
  setUsername:React.Dispatch<React.SetStateAction<string>>;
  user: UserProps; 
  setUser:React.Dispatch<React.SetStateAction<UserProps>>
}

export const UserContext = createContext<ContextProps>({} as ContextProps);

type Props = {
  children?: React.ReactNode
};

export const UserProvider = ({ children }: Props) => {
  const [username, setUsername] = useState("")
  useEffect(()=> {
    const usernameStorage = localStorage.getItem('username')
    usernameStorage ? setUsername(usernameStorage) : ''
  }, [])

  const [user, setUser] = useState({} as UserProps)
  useEffect(()=> {
    const userStorage = localStorage.getItem('user')
    userStorage ? setUser(JSON.parse(userStorage)) : ''
  }, [])

  return (
    <UserContext.Provider value={ {user, setUser, username, setUsername} }>
      {children}
    </UserContext.Provider>
  )
}