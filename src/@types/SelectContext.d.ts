import {UserProps} from './User'
export type SelectContextProps = {
  isActive: boolean;
  setIsActive:React.Dispatch<React.SetStateAction<boolean>>;
}