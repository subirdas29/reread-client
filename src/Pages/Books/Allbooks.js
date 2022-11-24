import React from 'react';

const Allbooks = ({book}) => {
    const {name,img,location,resale_price,original_price,years_of_use,seller_name} = book
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{location}</p>
    <p>{resale_price}</p>
    <p>{original_price}</p>
    <p>{years_of_use}</p>
    <p>{seller_name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Allbooks;