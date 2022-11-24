import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Allbooks from './Allbooks';

const Books = () => {

    const books = useLoaderData()
    console.log(books)
    


    // const [books,setBooks] = useState([])
    // console.log(books)

    // useEffect(()=>{
    //     fetch('books.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(books)
    //         setBooks(data)
    //     })
    // },[books])

    return (
        <div>
            {
                books?.map(book=><Allbooks key={book.book_id} book={book}></Allbooks>)
            }
        </div>
    );
};

export default Books;