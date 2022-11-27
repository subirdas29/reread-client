import React from 'react';
import { TiTickOutline } from 'react-icons/fa';

const Allbooks = ({book}) => {
    const {book_name,img,location,resale_price,original_price,year_of_use,seller_name,posted_time,status} = book
    

   
    return (
      

<div className="card bg-base-100 shadow-xl">
  <figure><img  className="h-96  w-4/5" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{book_name}</h2>
    <p>Location:{location}</p>
    <p>Resale_Price:${resale_price}</p>
    <p>Original_Price:${original_price}</p>
    <p>Years_Of_Use:{year_of_use}</p>
    
  
      {
        status && <p>Seller:{seller_name}<TiTickOutline/> </p>
      }
 
    <p>Published Date: {posted_time}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    );
};

export default Allbooks;