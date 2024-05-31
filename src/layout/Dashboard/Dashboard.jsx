import {
  FaAd,
  FaApple,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaPeopleArrows,
  FaShoppingCart,
} from "react-icons/fa";
import { FaPlus, FaUserGroup } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  //TODO: get value of isAdmin from database
  const [isAdmin] = useAdmin();

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu text-black">
            {isAdmin ? (
              <>
                {/* Admin Panel */}
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/additem">
                    <FaPlus></FaPlus> Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList></FaList> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageBookings">
                    <FaBook></FaBook> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <FaPeopleArrows></FaPeopleArrows> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {/* User panel */}
                <li>
                  <NavLink to="/dashboard/userhome">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar>Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart> My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <FaAd></FaAd> Add Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/booking">
                    <FaList></FaList> My Bookings
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="order/salad">
                <FaApple></FaApple> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="contact">
                <FaUserGroup></FaUserGroup> Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
