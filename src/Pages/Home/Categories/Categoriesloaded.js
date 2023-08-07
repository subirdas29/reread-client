import React from 'react';
import { Link } from 'react-router-dom';

const Categoriesloaded = ({category}) => {

    const {cat_name,cat_img,category_id} = category
    return (
        <div className="card  shadow-xl image-full">
        <figure><img src={cat_img} alt="Shoes" /></figure>
        <div className="card-body justify-center text-center">
         <div>
         <h2 className="text-white lg:text-3xl md:text-3xl text-4xl font-bold">{cat_name}</h2>
          
         </div>
          <div className="flex justify-center gap-2 my-5">     
          

            <Link to={`/categories/${category_id}`}><button className="btn btn-primary ">Visit Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Categoriesloaded;