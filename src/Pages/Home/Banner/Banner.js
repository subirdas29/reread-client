import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="hero min-h-screen" 
        style={{ backgroundImage: `url("https://i.ibb.co/2yWkq0G/Untitled-1.jpg")` }}
        >
          <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row'>
          
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        {/* <div className="hero-content text-center text-neutral-content"> */}
          <div className=" w-full lg:w-1/2  my-auto p-20 text-center">
           <h1 className="mb-5 text-7xl text-[#F44344] font-bold">Buy Your</h1>
           <h1 className="mb-5 text-7xl font-bold">Best Books</h1>
           <h1 className="mb-5 text-7xl font-bold">From <span className='text-[#F44344]' >Here</span></h1>
          

            <button className="bg-black px-12 mt-5 rounded-full text-white py-5 hover:bg-[#F44344]" >Explore More 
            <FontAwesomeIcon className='ml-5' icon={faCartShopping} />
            </button></div>
         
          <div className='w-full lg:w-1/2  flex justify-end'><img className='w-full' src='https://i.ibb.co/BtyZ7HC/Untitled-1.png'/>
          </div>
        </div>
        </div>
      // </div>
    );
};

export default Banner;