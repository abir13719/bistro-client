import { createBrowserRouter } from "react-router-dom";
import Base from "../pages/Base";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Secret";
import PrivateRoute from "./PrivateRoute";
import Cart from "../layout/Dashboard/Cart";
import Dashboard from "../layout/Dashboard/Dashboard";
import AllUsers from "../layout/Dashboard/AllUsers";
import AddItem from "../layout/Dashboard/AddItem";
import AdminRoteProvider from "./AdminRoteProvider";
import ManageItem from "../layout/Dashboard/ManageItem";
import UpdateItem from "../layout/Dashboard/UpdateItem";
import Payment from "../layout/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base></Base>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      // Admin Route
      {
        path: "addItem",
        element: (
          <AdminRoteProvider>
            <AddItem></AddItem>
          </AdminRoteProvider>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoteProvider>
            <ManageItem></ManageItem>
          </AdminRoteProvider>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoteProvider>
            <UpdateItem></UpdateItem>
          </AdminRoteProvider>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`),
      },

      {
        path: "allUsers",
        element: (
          <AdminRoteProvider>
            <AllUsers></AllUsers>
          </AdminRoteProvider>
        ),
      },
    ],
  },
]);

export default router;
