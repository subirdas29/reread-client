import React from 'react';

const AdvertismentCard = ({book, handleBookedSubmit}) => {
    const {img,advertisement,name} = book
   
    return (
<div>
    {

        advertisement ? <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='h-96 w-96' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Book Name: {name}</h2>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>handleBookedSubmit(book)}>Book Now</button>
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