import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch,AiOutlineUser } from 'react-icons/ai';
import { MdMenu, MdClose } from 'react-icons/md';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import './Navbar.css'

const Navbar = () => {

   

    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown menu
    const [isFixed, setIsFixed] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);

    // Toggle the dropdown menu state
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  
    

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `navbar ${isFixed ? 'fixed' : ''}`;



    
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
    <li><Link to="/" className=' hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg '>Home</Link></li>
    <li><a href='#cat' className=' hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg '>Categories</a></li>
    <li><Link to="/blog" className=' hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg '>Blog</Link></li>

    {
        isAdmin?
        <>
        <li><Link to="/dashboard/allbuyer"className=' hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg'>DashBoard</Link></li>
        </>:
        
         isSeller ? <li><Link to="/dashboard/mybook"className=' hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg '>DashBoard</Link></li>
         :
         <li><Link to="/dashboard/myorder"className=' hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg '>DashBoard</Link></li>
         
    }


    {
        user?.uid?
       <>
      
        <li><button onClick={handleLogOut}className=' hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg font-semibold'>Logout</button></li>
        <span className='text-white'>{user?.displayName}</span>
       </> 
       
        : <>
        <li><Link to="/login"className=' hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg '>Login</Link></li>
    <li><Link to="/signup"className=' hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg'>SignUp</Link></li>
        </>
       
    }
    <li className='sm:hidden block'>
    <div className="relative hover:text-[#f44344] focus:text-[#f44344] bg-transparent text-lg  ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="rounded-full px-3 w-40 py-2 border border-gray-300 focus:outline-none focus:border-[#f44344]"
                        />
                        <span className="absolute right-7 top-1/2 transform -translate-y-1/2 cursor-pointer">
                            <AiOutlineSearch size={20} />
                        </span>
                    </div>
    </li>
</React.Fragment>
    return (
        <div className={navbarClasses}>
        <div className="navbar flex justify-between ">
        <div className="navbar-start ml-6">
        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
                            {isDropdownOpen ? <MdClose size={24} /> : <MdMenu size={24} />} {/* Toggle between menu and close icon */}
                        </label>
                        {isDropdownOpen && (
                            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                                {menuItems}
                            </ul>
                        )}
                    </div>
            <Link to = "/" className="btn btn-ghost normal-case text-xl">ReRead</Link>
        </div>
        <div className="navbar-center hidden lg:flex grow">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
                
            </ul>
        </div>
        <div className="navbar-end flex items-center mr-6">
                    {/* Search Bar */}
                    <div className="relative mx-2 sm:block hidden text-lg">
                        <input
                            type="text"
                            placeholder="Search"
                            className="rounded-full md:px-4 md:py-2 sm:px-2 sm:py-2 bg-transparent  border border-gray-400 focus:outline-none focus:border-[#f44344] "
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                            <AiOutlineSearch size={20} />
                        </span>
                    </div>
                   
                    <AiOutlineHeart  className=" h-7 w-7 mx-2 cursor-pointer hover:text-[#f44344] focus:text-[#f44344] bg-transparent  font-extralight" />

                   
                    <AiOutlineShoppingCart  className=" h-7 w-7  mx-2 cursor-pointer hover:text-[#f44344] focus:text-[#f44344] bg-transparent  font-extralight" />
                    <AiOutlineUser  className="h-7 w-7 mx-2 cursor-pointer hover:text-[#f44344] focus:text-[#f44344] bg-transparent font-bold" />

                   
                </div>
            
        </div>
    
    </div>
    );
};

export default Navbar;