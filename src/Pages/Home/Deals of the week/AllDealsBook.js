import React from 'react';

const AllDealsBook = ({dealBook}) => {
    const {name,img,location,resale_price,original_price,year_of_use,seller_name,posted_time,email,cat_name} =dealBook
    return (
  <div className='my-5 ml-8 flex items-center gap-6'>
    <img src={img} className="w-24 h-36 rounded-lg shadow-2xl" />
    <div className='content-center '>
      <h1 className="text-sm font-bold">{cat_name}</h1>
      <h1 className="text-xl font-bold mb-5">{name}</h1>
      <h1 className="text-lg font-bold">Original Price:{original_price}</h1>
      <h1 className="text-lg font-bold">Reasale Price:{resale_price}</h1>
   
   
  </div>

        </div>
    );
};

export default AllDealsBook;