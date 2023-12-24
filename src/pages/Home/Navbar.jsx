import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user ,loggedOut} = useAuth();
  const navLinks = (
    <>
      <li className="">
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
  const handleLoggedOut = () =>{
    loggedOut().then(()=>{
      toast.success("Log out successfully")
    })
  }
  return (
    <div className="navbar flex justify-between text-slate-100">
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
      <div>
        {user && user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user && user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between text-black">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li className="text-black">
                <button onClick={handleLoggedOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="flex">
            <li className="text-lg">
              <Link to={"/login"}>Login</Link>
            </li>
            <div className="divider lg:divider-horizontal divider-neutral"></div>
            <li className="text-lg">
              <Link to={"/sign-up"}>Sign Up</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
