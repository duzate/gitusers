import {UserProps} from './User'
export type SelectContextProps = {
  select: string;
  setSelect:React.Dispatch<React.SetStateAction<string>>;
}