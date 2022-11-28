import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

import useSeller from '../hooks/useSeller';



const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
 
  
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!active);
  };


    return (
        <div>
           

            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-[#333333] text-white">
     

       
   
       
        {
        isAdmin ? <>
          <li> <Link to='/dashboard/allseller' onClick={handleClick}  style={{ backgroundColor: active ? "yellow" : "white" }}>All Seller</Link></li>
          <li> <Link to='/dashboard/allbuyer'>All Buyer</Link></li>
          <li> <Link to='/dashboard/reporteditems'>Reported Items</Link></li>
        
      </>
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