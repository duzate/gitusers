import {UserProps} from './User'
export type UserContextProps = {
  username: string;
  setUsername:React.Dispatch<React.SetStateAction<string>>;
  user: UserProps; 
  setUser:React.Dispatch<React.SetStateAction<UserProps>>
}