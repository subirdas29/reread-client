import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';



const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  
  const [isAdmin] = useAdmin(user?.email)
  
    return (
        <div>
            {/* <Navbar></Navbar> */}

            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li><Link to='/dashboard/myorder'>My Orders</Link></li>
      
        {
        isAdmin && <>
          <li> <Link to='/dashboard/allseller'>All Seller</Link></li>
          <li> <Link to='/dashboard/allbuyer'>Add Buyer</Link></li>
          <li> <Link to='/dashboard/reporteditems'>Reported Items</Link></li>
      </>
      }
      
    </ul>
  
  </div>
</div>

        </div>
    );
};

export default DashboardLayout;