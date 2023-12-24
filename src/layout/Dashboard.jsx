import {FaHome,} from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const {user} = useAuth();
  return (
    <div className="flex gap-10 ">
      <div className="w-64 min-h-screen bg-[#1F2937] px-9 py-6 text-center text-white">
        <h2 className="text-2xl font-extrabold uppercase"> Dashboard</h2>
        <div className="dropdown mb-10 mt-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-24 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user&& user?.photoURL}
              />
            </div>
            <p>{user&& user?.displayName}</p>
            <p>{user&& user?.email}</p>
          </div>
        </div>
        <ul className="menu p-2">
          <>
            <li className="list-none mb-2">
              <NavLink to={"/dashboard/userHome"}>
                <IoMdCreate />
                Create New task
              </NavLink>
            </li>
            <li className="list-none mb-2">
              <NavLink to={"/dashboard/userHome"}>
                <MdOutlineSkipPrevious />
                Previous Task
              </NavLink>
            </li>
          </>

          {/* Shared dashboard */}
          <div className="divider"></div>
          <li className="list-none mb-2">
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
