import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";

const Main = () => {
  return (
    <div>
      <div className="bg-[#e9c46a]">
        <div className="max-w-6xl mx-auto">
          <Navbar />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
