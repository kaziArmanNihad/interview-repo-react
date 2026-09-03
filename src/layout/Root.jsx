import Navbar from "../pages/shared/Navbar";
import { Outlet } from "react-router";

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Root;
