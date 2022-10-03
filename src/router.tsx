
import {
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Repos from "./pages/Repos";
import Following from "./pages/Following";
import Followers from "./pages/Followers";

const router = () => {

  return(
    <Routes >
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/repos" element={<Repos />} />
      <Route path="/following" element={<Following />} />
      <Route path="/followers" element={<Followers />} />
    </Routes>
  )
}


export default router