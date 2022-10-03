import { useContext } from "react";
import { FollowingContext } from '../providers/Following';

export const useFollowing = () => {
  const value = useContext(FollowingContext);

  return value;
};