import { useContext } from "react";
import { FollowersContext } from '../providers/Followers';

export const useFollowers = () => {
  const value = useContext(FollowersContext);

  return value;
};