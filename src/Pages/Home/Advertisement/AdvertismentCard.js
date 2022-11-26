import React from 'react';

const AdvertismentCard = ({book}) => {
    const {img} = book
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className='h-96 w-96' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default AdvertismentCard;