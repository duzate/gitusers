import {ReposProps} from './Repos'
export type ReposContextProps = {
  repos: ReposProps; 
  setRepos:React.Dispatch<React.SetStateAction<ReposProps>> 
}