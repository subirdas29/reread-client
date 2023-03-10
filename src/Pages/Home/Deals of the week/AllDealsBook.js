import React from 'react';

const AllDealsBook = ({dealBook}) => {
    const {name,img,location,resale_price,original_price,year_of_use,seller_name,posted_time,email,cat_name} =dealBook
    return (
  <div>
    <div className='my-3 lg:ml-8 flex items-center'>

<img src={img} className="w-24 h-36 rounded-lg shadow-2xl " />

    <div className='content-center ml-5 '>
      <h1 className="text-sm font-bold text-[#999999]">{cat_name}</h1>
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
        <div className='lg:ml-8 h-[1px] bg-[#EAEAEA]'></div>
  </div>
    );
};

export default AllDealsBook;