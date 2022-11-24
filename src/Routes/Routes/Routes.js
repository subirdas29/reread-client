import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import About from "../../Pages/About/About";
import Books from "../../Pages/Books/Books";
import Allbooks from "../../Pages/Books/Allbooks";

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

    // `http://localhost:3000/categories/${params.id}`
    {
        path:'/books', 
        element:<Books></Books>,
        loader:()=> fetch('books.json')
    },
    {
        path:'/about',
        element:<About></About>
    },
   
    
    ]
    },
   
])