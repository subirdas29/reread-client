import React from 'react';
import { Link } from 'react-router-dom';

const Categoriesloaded = ({category}) => {

    const {cat_name,cat_img,category_id} = category
    return (
        <div className="card  shadow-xl image-full my-10">
        <figure><img src={cat_img} alt="Shoes" /></figure>
        <div className="card-body text-center">
         <div>
         <h2 className="text-white text-2xl font-bold">{cat_name}</h2>
          
         </div>
          <div className="flex justify-center gap-2 my-5">     
          

            <Link to={`/categories/${category_id}`}><button className="btn btn-primary ">Visit Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Categoriesloaded;