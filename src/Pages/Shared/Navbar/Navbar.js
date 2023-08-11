import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { MdMenu, MdClose } from 'react-icons/md';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';

const Navbar = () => {

    const transparentBackgroundClass = 'navbar bg-transparent';
    const solidBackgroundClass = 'navbar bg-[#FFFFFF] drop-shadow-lg';
    const fixedNavbarClass = 'fixed top-0 left-0 w-full z-50';

    const [isFixed, setIsFixed] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown menu

    // Toggle the dropdown menu state
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  
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
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
                            {isDropdownOpen ? <MdClose size={24} /> : <MdMenu size={24} />} {/* Toggle between menu and close icon */}
                        </label>
                        {isDropdownOpen && (
                            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        )}
                    </div>
            <Link to = "/" className="btn btn-ghost normal-case text-xl">ReRead</Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
                
            </ul>
        </div>
        <div className="navbar-end flex items-center">
                    {/* Search Bar */}
                    <div className="relative mx-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-400"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <AiOutlineSearch size={20} />
                        </span>
                    </div>
                   
                    <AiOutlineHeart size={24} className="mx-2 cursor-pointer" />

                   
                    <AiOutlineShoppingCart size={24} className="mx-2 cursor-pointer" />

                   
                </div>
            
        </div>
    
    </div>
    );
};

export default Navbar;