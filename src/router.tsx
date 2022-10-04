
import {
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Repos from "./pages/Repos";
import Following from "./pages/Following";
import Followers from "./pages/Followers";
import { RoutePrivete } from "./providers/RoutePrive";

const router = () => {
  return(
    <Routes >
      <Route path="/" element={<RoutePrivete><Home /></RoutePrivete>} />
      <Route path="/repos" element={<RoutePrivete><Repos /></RoutePrivete>} />
      <Route path="/following" element={<RoutePrivete><Following /></RoutePrivete>} />
      <Route path="/followers" element={<RoutePrivete><Followers /></RoutePrivete>} />
      
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}


export default router