import {FollowProps} from './Follow'
export type FollowersContextProps = {
  followers: FollowProps; 
  setFollowers:React.Dispatch<React.SetStateAction<FollowProps>> 
}