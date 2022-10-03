import {FollowProps} from './Follow'
export type FollowContextProps = {
  following: FollowProps; 
  setFollowing:React.Dispatch<React.SetStateAction<FollowProps>> 
}