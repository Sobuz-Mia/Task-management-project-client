import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to={"/community-form"}>Community Form</NavLink>
      </li>
      <li>
        <NavLink to={"/task"}>Task</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar flex justify-between">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">TaskFlow</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className=" flex gap-5">
        <button className="btn btn-ghost bg-[#264653] text-white text-xl font-bold rounded-full">
          Create a Task
        </button>
        <ul className="flex">
          <li className="text-xl">
            <NavLink to={"/task"}>Login</NavLink>
          </li>
          <div className="divider lg:divider-horizontal divider-neutral"></div> 
          <li className="text-xl">
            <NavLink to={"/task"}>Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
