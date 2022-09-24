import { useState, createContext, useEffect } from "react";
import { api } from "../services/api";
export const UserContext = createContext({});
export const UserProvider = (props) => {
  const [user, setUser] = useState({});
}