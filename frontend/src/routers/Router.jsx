import {createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Logout from "../components/Logout";
import AudioBooks from "../components/AudioBooks";
import Cart from "../components/Cart";
import ScrollToTop from "./ScrollToTop";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
         path:'/',
        element:<><ScrollToTop/><Home/></>   
        },
        {
            path:'/shop',
            element:<><ScrollToTop/><Shop/></>
        },
         {
            path:'/about',
            element:<><ScrollToTop/><About/></>
        },
        {
          path:'/cart',
          element:<><ScrollToTop/><Cart/></>
        },
        {
            path:'/audiobooks',
            element:<><ScrollToTop/><AudioBooks/></>
        },
        {
          path:'/book/:id',
          element:<><ScrollToTop/><SingleBook/></>,
          loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
      }       
      ]
    },

    {
      path:'/admin/dashboard',
      element:<DashboardLayout/>,
      children:[
        {
          path:'/admin/dashboard',
          element:<PrivateRoute><ScrollToTop/><Dashboard/></PrivateRoute>
        },
        {
          path:'/admin/dashboard/upload',
          element:<><ScrollToTop/><UploadBook/></>
        },
        {
          path:'/admin/dashboard/manage',
          element:<><ScrollToTop/><ManageBook/></>
        },
        {
          path:'/admin/dashboard/edit-books/:id',
          element:<><ScrollToTop/><EditBooks/></>,
          loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        }


      ]
    },
    
    {
      path:'sign-up',
      element:<Signup/>
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'logout',
      element:<Logout/>
    }

  ]);

  export default router;