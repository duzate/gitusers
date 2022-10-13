
import { useAuth } from "../Hooks/Auth"
import Login from "../pages/Login"

export const RoutePrivete = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (!user) {
    return <Login />
  }

  return children
}
