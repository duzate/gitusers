
import {
  createBrowserRouter,
  createRoutesFromChildren,
  redirect,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Repos from "./pages/Repos";
import Following from "./pages/Following";
import Followers from "./pages/Followers";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" >
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="repos" element={<Repos />} />
      <Route path="following" element={<Following />} />
      <Route path="followers" element={<Followers />} />
    </Route>
  )
)

export default router