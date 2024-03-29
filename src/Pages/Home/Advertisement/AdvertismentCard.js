import React from 'react';

const AdvertismentCard = ({book, handleBookedSubmit}) => {
    const {img,advertisement,name} = book
   
    return (
<div>
    {

        advertisement ? <div className="card card-compact h-full bg-base-100 shadow-xl">
        <figure><img className='h-64 w-64 lg:h-96 lg:w-96' src={img} alt="Shoes" /></figure>
        <div className="card-body ">
          <h2 className="card-title justify-center text-lg">{name}<span className='text-sm opacity-60'>Sponsored</span></h2>
          
          <div className="card-actions justify-center">
            <button className="bg-black  px-4  rounded-t-lg rounded-b-lg py-2  text-white hover:text-white hover:outline outline-1  outline-white text-base hover:bg-[#F44344] drop-shadow-lg" onClick={()=>handleBookedSubmit(book)}>Book Now</button>
          </div>
        </div>
      </div>: <>
      <p>nothing have</p>
      </>
    }
</div>
     
    );
};

export default AdvertismentCard;