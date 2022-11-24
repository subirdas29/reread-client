import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Allbooks from './Allbooks';

const Books = () => {

    const books = useLoaderData()

    

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 m-20'>
            {
                books?.map(book=><Allbooks key={book.book_id} book={book}></Allbooks>)
            }
        </div>
    );
};

export default Books;