import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllDealsBook from './AllDealsBook';

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
            <div className='grid grid-cols-3 mx-10 '>
            <div className="col-span-2 ">
                <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/bh01.jpg'></img>
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