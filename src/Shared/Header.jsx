import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/about">About</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/services">Services</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/blog">Blog</Link>{" "}
      </li>
      <li>
        <Link to="/about">Contact</Link>
      </li>
      {user ? (
        <li onClick={handleLogOut}>
          <Link>Log Out</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {/* <li><Link to="/signup">Sign Up</Link> */}
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-8 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-[100px]" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a href="#" className="mr-5 text-xl text-slate-500">
          <FaShoppingBag></FaShoppingBag>
        </a>
        <a href="#" className="mr-5 text-xl text-slate-500">
          <FaSearch></FaSearch>
        </a>
        <a className="btn btn-outline btn-warning">Button</a>
      </div>
    </div>
  );
};

export default Header;
