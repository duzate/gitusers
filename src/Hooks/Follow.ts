import { useContext } from "react";
import { FollowContext } from '../providers/Follow';

export const useFollow = () => {
  const value = useContext(FollowContext);

  return value;
};