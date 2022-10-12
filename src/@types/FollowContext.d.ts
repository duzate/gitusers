import {userProps} from './User'
export type FollowContextProps = {
  follow: UserProps | null; 
  setFollow:React.Dispatch<React.SetStateAction<userProps>> 
}