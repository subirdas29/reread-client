import React from 'react';

const Allbooks = ({book}) => {
    const {name,img,location,resale_price,original_price,years_of_use,seller_name} = book
    return (
      

<div className="card bg-base-100 shadow-xl">
  <figure><img  className="h-96  w-4/5" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Location:{location}</p>
    <p>Resale_Price:{resale_price}</p>
    <p>Original_Price:{original_price}</p>
    <p>Years_Of_Use:{years_of_use}</p>
    <p>Seller_Name:{seller_name}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    );
};

export default Allbooks;