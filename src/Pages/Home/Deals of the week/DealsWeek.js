import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllDealsBook from './AllDealsBook';
import bg_banner_img from '../../../assets/Deals-book-bg/bh.png';
const DealsWeek = () => {
    // const dealsBook = useLoaderData()
    // console.log(dealsBook)
    const [dealsBook,setDealsBook] = useState([])

        useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>{
            setDealsBook(data)
        })
    },[])
    return (
        <div>
            <p className='text-4xl font-bold text-center  mb-10'>Best Deals Of The Week!</p>
            <div className='grid lg:grid-cols-3 mx-10 '>
         
          <div className="lg:col-span-2 w-full relative"
        //    style={{ backgroundImage: `url(${bg_banner_img})` }}
           >
                <img src={bg_banner_img}/>
                <div className=" w-full  my-auto p-20 text-center absolute bottom-32 text-[#FFFFFF] grid justify-items-start ">
           <h1 className="mb-5 text-xl text-left">NEW YEAR, NEW BOOKS
</h1>
           <h1 className="mb-5 font-bold text-5xl text-left">The 19 Best New 
YA Books of January</h1>
           <h1 className="mb-5 text-left">Without further ado, here are some of the most anticipated YA book
coming out this January.</h1>
          

            <button className="bg-white px-14 mt-5 rounded-full text-black hover:text-white hover:outline outline-1  outline-white py-3 hover:bg-[#F44344] " >See More
           
            </button></div>
            </div>
        
            <div className=''>
            {
                dealsBook?.map(dealBook => <AllDealsBook key={dealBook.book_id} dealBook={dealBook}></AllDealsBook>)
            }
            </div>
            <div>

            </div>
            </div>
        </div>
    );
};

export default DealsWeek;