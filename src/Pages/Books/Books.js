import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Allbooks from './Allbooks';

const Books = () => {

    const books = useLoaderData()

    const handleBookedSubmit = book =>{
        fetch('https://reread-server.vercel.app/myorders', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast('Successfully Booked')
                        })
    }

    return (
       <div>
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 m-20'>
            {
                books?.map(book=><Allbooks key={book.book_id} book={book} handleBookedSubmit={handleBookedSubmit}></Allbooks>)
            }
       </div>
       </div>
    );
};

export default Books;