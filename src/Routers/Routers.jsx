import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Home from "../Home/Home";
import Chefs from "../Chefs/Chefs";
import Banner from "../Banner/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,  
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: ":id",
        element: <Banner></Banner>,
        loader: ({params}) => fetch(`http://localhost:4000/banner/${params._id}`)
      }
    ]
  },
]);

export default router;