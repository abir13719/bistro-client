import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const NavBar = () => {
  const { user, Logout } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    Logout().then(() => {});
  };

  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart">
          <button className="flex gap-1 items-center">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>

      {user ? (
        <>
          <li className="flex items-center">
            <button onClick={handleLogOut}>Log Out</button>
          </li>
          <li className="flex items-center">
            <p>{user.displayName}</p>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="container mx-auto fixed z-[100] left-0 right-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm text-white navbar">
      <div className="navbar-start">
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
            {navList}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BistroBoss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
