import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import About from "../../Pages/About/About";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[{
            path:'/',
            element:<Home></Home>
        },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    },
    {
        path:'/about',
        element:<About></About>
    },
   
    
    ]
    },
   
])