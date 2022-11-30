import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

import useSeller from '../hooks/useSeller';



const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
 
  
  let activeStyle = {
    backgroundColor:'white',
    color:'black'
  };


    return (
        <div>
           

            <div className="drawer drawer-mobile ">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-[#333333] text-white">
     

       
   
       
        {
        isAdmin ? <div  >
          <li> <NavLink to='/dashboard/allseller' style={({ isActive }) =>
              isActive ? activeStyle : undefined}>All Seller</NavLink></li>
          <li> <NavLink to='/dashboard/allbuyer' style={({ isActive }) =>
              isActive ? activeStyle : undefined} className='my-5'  >All Buyer</NavLink></li>
          <li> <NavLink to='/dashboard/reporteditems' style={({ isActive }) =>
              isActive ? activeStyle : undefined} >Reported Items</NavLink></li>
        
      </div>
      :
     
        isSeller ? <>
         
         <li> <Link to='/dashboard/mybook'>My Books</Link></li>
         <li> <Link to='/dashboard/addbook'>Add Book</Link></li>
         
        </> :

        <li> <Link to='/dashboard/myorder'>MyOrders</Link></li>
      }
    
     
      
    </ul>
  
  </div>
</div>

        </div>
    );
};

export default DashboardLayout;