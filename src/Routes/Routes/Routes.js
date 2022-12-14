import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import About from "../../Pages/About/About";
import Books from "../../Pages/Books/Books";

import MyOrders from "../../Pages/Dashboard/Buyer/MyOrders";
import DashboardLayout from "../../Layout/DashboardLayout";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import AdminRouter from "../AdminRouter/AdminRouter";
import AllSeller from "../../Pages/Dashboard/Admin/AllSeller/AllSeller";
import AllBuyer from "../../Pages/Dashboard/Admin/AllBuyer/AllBuyer";
import ReportedItems from "../../Pages/Dashboard/Admin/ReportedItems";

import SellerRouter from "../SellerRouter/SellerRouter";


import MyBooks from "../../Pages/Dashboard/Seller/MyBooks";
import AddBook from "../../Pages/Dashboard/Seller/AddBook";
import Blog from "../../Blog/Blog";

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
        path:'/categories/:id',
        element:<PrivateRouter><Books></Books></PrivateRouter>,
        loader:({params})=>fetch(`https://reread-server.vercel.app/categories/${params.id}`)
    },
  
    {
        path:'/about',
        element:<About></About>
    },
    {
        path:'/blog',
        element:<Blog></Blog>
    },

    {
        path:'/dashboard',
        element:<PrivateRouter>
           <DashboardLayout></DashboardLayout>
        </PrivateRouter>,
        children:[
            {
                path:'/dashboard/myorder',
                element:<PrivateRouter><MyOrders></MyOrders></PrivateRouter>
            },
            {
            path:'/dashboard/allseller',
            element:
                <AdminRouter> <AllSeller></AllSeller></AdminRouter>
            },
            {
                path:'/dashboard/allbuyer',
                element:
                <AdminRouter><AllBuyer></AllBuyer></AdminRouter>
                    
                },
            {
                path:'/dashboard/reporteditems',
                element:
                    <AdminRouter><ReportedItems></ReportedItems></AdminRouter>
                },

                {
                    path:'/dashboard/addbook',
                    element:
                        <SellerRouter><AddBook></AddBook></SellerRouter>
                    },
                {
                    path:'/dashboard/mybook',
                    element:<SellerRouter><MyBooks></MyBooks></SellerRouter>
                       
                    },

            
            
            
    ]
    },
   
    
    ]
    },
   
])