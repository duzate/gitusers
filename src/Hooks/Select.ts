import { useContext } from "react";
import { SelectContext } from '../providers/Select';

export const useSelect = () => {
  const value = useContext(SelectContext);

  return value;
};