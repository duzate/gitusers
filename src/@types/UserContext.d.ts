import {UserProps} from './User'
export type UserContextProps = {
  username: string;
  setUsername:React.Dispatch<React.SetStateAction<string>>;
  user: UserProps | null;
  setUser:React.Dispatch<React.SetStateAction<UserProps | null>>;
  handleLogout: () => void;
}