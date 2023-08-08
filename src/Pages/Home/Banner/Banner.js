import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import book_read_img from '../../../assets/Banner-Image/banner-book-img.png';
import bg_banner_img from '../../../assets/Banner-Image/Banner-background.jpg';

const Banner = () => {
    return (
        <div className=" 
        w-full bg-cover " 
        style={{ backgroundImage: `url(${bg_banner_img})` }}
        >
          <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row'>
          
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        {/* <div className="hero-content text-center text-neutral-content"> */}
          <div className=" w-full lg:w-1/2  my-auto lg:p-16 lg:mb-14 lg:mt-10 mt-8 p-10 text-center">
           <h1 className="mb-5 lg:text-7xl md:text-6xl sm:text-6xl text-5xl text-[#F44344] font-bold">Buy Your</h1>
           <h1 className="mb-5 lg:text-7xl md:text-6xl sm:text-6xl text-5xl font-bold">Best Books</h1>
           <h1 className="mb-5 lg:text-7xl md:text-6xl sm:text-6xl text-5xl font-bold">From <span className='text-[#F44344]' >Here</span></h1>
          

            <button className="bg-black lg:px-12 md:px-11 sm:px-10 px-8 mt-5 rounded-full text-white lg:py-5 md:py-5 sm:py-4 py-3 hover:bg-[#F44344]" >Explore More 
            <FontAwesomeIcon className='ml-5' icon={faCartShopping} />
            </button></div>
         
          <div className='w-full lg:w-1/2  flex justify-end'><img className='w-full lg:pt-16 pt-10 ' src={book_read_img}/>
          </div>
        </div>
        </div>
      // </div>
    );
};

export default Banner;