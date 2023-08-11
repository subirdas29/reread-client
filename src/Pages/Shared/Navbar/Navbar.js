import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';

const Navbar = () => {

    const transparentBackgroundClass = 'navbar bg-transparent';
    const solidBackgroundClass = 'navbar bg-[#FFFFFF] drop-shadow-lg';
    const fixedNavbarClass = 'fixed top-0 left-0 w-full z-50';

    const [isFixed, setIsFixed] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const shouldFixNavbar = window.scrollY > 0;
        setIsFixed(shouldFixNavbar);
  
        const shouldUseTransparentBackground = window.scrollY === 0;
        setIsTransparent(shouldUseTransparentBackground);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
    const {user,logOut} = useContext(AuthContext)
    console.log(user)



    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const handleLogOut = ()=>
    {
        logOut().then(() => {
            
          }).catch((error) => {
           
          });
    }
   
    const menuItems =
    <React.Fragment>
    <li><Link to="/">Home</Link></li>
    <li><a href='#cat'>Categories</a></li>
    <li><Link to="/blog">Blog</Link></li>

    {
        isAdmin?
        <>
        <li><Link to="/dashboard/allbuyer">DashBoard</Link></li>
        </>:
        
         isSeller ? <li><Link to="/dashboard/mybook">DashBoard</Link></li>
         :
         <li><Link to="/dashboard/myorder">DashBoard</Link></li>
         
    }


    {
        user?.uid?
       <>
      
        <li><button onClick={handleLogOut}>Logout</button></li>
        <span className='text-white'>{user?.displayName}</span>
       </> 
       
        : <>
        <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">SignUp</Link></li>
        </>
       
    }
</React.Fragment>
    return (
        <div className={`${isFixed ? fixedNavbarClass : ''} ${isTransparent ? transparentBackgroundClass : solidBackgroundClass}`}>
        <div className="navbar bg-[#FFFFFF] flex justify-between">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                    
                </ul>
            </div>
            <Link to = "/" className="btn btn-ghost normal-case text-xl">ReRead</Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
                
            </ul>
        </div>
        </div>
    
    </div>
    );
};

export default Navbar;