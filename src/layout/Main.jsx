import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Footer/Footer";
import UserCategoriesSection from "../pages/Home/UserCategoriesSection";

const Main = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#38065D] to-[#56077E]">
        <div className="max-w-6xl mx-auto">
          <Navbar />
        </div>
      </div>
      <Outlet />
      <UserCategoriesSection/>
      <Footer/>
    </div>
  );
};

export default Main;
