import React from 'react';
import { Link } from 'react-router-dom';

const Categoriesloaded = ({category}) => {

    const {cat_name,cat_img,category_id} = category
    return (
        <div className="card  shadow-xl image-full">
        <figure><img className='w-full h-fit' src={cat_img} alt="Shoes" /></figure>
        <div className="card-body justify-center text-center">
         <div>
         <h2 className="text-white lg:text-3xl md:text-3xl text-4xl font-bold">{cat_name}</h2>
          
         </div>
          <div className="flex justify-center gap-2 my-5">     
          

            <Link to={`/categories/${category_id}`}><button className=" bg-white px-8  rounded-t-lg rounded-b-lg  text-black hover:text-white hover:outline outline-1  outline-white py-3 lg:text-lg  text-sm font-semibold hover:bg-[#F44344] drop-shadow-lg">Visit Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Categoriesloaded;