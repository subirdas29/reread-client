import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const Allbooks = ({book,handleBookedSubmit}) => {
    const {name,img,location,resale_price,original_price,year_of_use,seller_name,posted_time,email} =book
    const [seller, setSeller] = useState({});
    console.log(seller);
    
useEffect(()=>{
  fetch(`https://reread-server.vercel.app/users/seller/${email}`)
  .then(res=>res.json())
  .then(data=>setSeller(data.user))
},[email])
   
    return (
      

<div className="card bg-base-100 shadow-xl">
  <figure><img  className="h-96  w-4/5" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Book Name: {name}</h2>
    <p>Location:{location}</p>
    <p>Resale_Price: {resale_price}</p>
    <p>Original_Price: {original_price}</p>

    
  
      {
        seller?.status==='verified' ? <p>Seller:{seller_name} <FontAwesomeIcon className="text-blue-700" icon={faCircleCheck} /> </p> : <p>Seller:{seller_name}</p>
      }
 
    <div className="card-actions justify-center">
      <button className="bg-black  px-4  rounded-t-lg rounded-b-lg py-2  text-white hover:text-white hover:outline outline-1  outline-white text-base hover:bg-[#F44344] drop-shadow-lg" onClick={()=>handleBookedSubmit(book)}>Book Now</button>
    </div>
  </div>
</div>

    );
};

export default Allbooks;