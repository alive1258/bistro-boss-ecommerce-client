import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivetRoutes from "./PrivetRoutes";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from './../Pages/Dashboard/AllUsers/AllUsers';
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from './AdminRoute';
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivetRoutes><Secret></Secret></PrivetRoutes>
        }
      ]

    },
    {
      path:'dashboard',
      element:<PrivetRoutes><DashBoard></DashBoard></PrivetRoutes>,
      children:[
        {
          path:'userhome',
          element:<UserHome></UserHome>
        },
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        // admin routes
        {
          path:'adminhome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageitems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
      ]
    }
  ]);