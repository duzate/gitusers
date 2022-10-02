import { useContext } from "react";
import { ReposContext } from '../providers/Repos';

export const useRepos = () => {
  const value = useContext(ReposContext);

  return value;
};