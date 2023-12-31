import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../pages/AddBlog/AddBlog";

import AllBlog from "../pages/All Blog/AllBlog";
import BlogDetail from "../pages/Blog Details/BlogDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeaturedBlog from "../pages/Featured Blog/FeaturedBlog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Update from "../pages/Update Blog/Update";
import Wishlist from "../pages/Wishlist/Wishlist";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/all",
        element: <AllBlog></AllBlog>,
        
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/all/:id",
        element: <PrivateRoute>
          <BlogDetail></BlogDetail>
        </PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/featured",
        element: <FeaturedBlog></FeaturedBlog>,
       
      },
      {
        path: "/profile",
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>,
      },
    ],
  },
]);

export default router;
