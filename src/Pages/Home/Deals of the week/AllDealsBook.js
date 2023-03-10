import React from 'react';

const AllDealsBook = ({dealBook}) => {
    const {name,img,location,resale_price,original_price,year_of_use,seller_name,posted_time,email,cat_name} =dealBook
    return (
  <div className='my-5 ml-8 flex items-center gap-6'>
    <img src={img} className="w-24 h-36 rounded-lg shadow-2xl" />
    <div className='content-center '>
      <h1 className="text-sm font-bold text-[#999999]">{cat_name}</h1>
      {/* <h1 className="text-xl font-bold mb-5">{name}</h1> */}
      <div className='text-xl font-bold'>
      {
                        name.length > 25 ?
                            <div >{name.slice(0, 25) + '...'} </div>
                            :
                            name
                    }
      </div>
      <h1 className="text-base font-bold text-[#F44344] mt-5">Original Price: {original_price}</h1>
      <h1 className="text-base font-bold text-[#F44344]">Resale Price: {resale_price}</h1>
   
  </div>

        </div>
    );
};

export default AllDealsBook;