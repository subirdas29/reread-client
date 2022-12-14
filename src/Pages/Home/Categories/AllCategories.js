import React, { useEffect, useState } from 'react';
import Categoriesloaded from './Categoriesloaded';

const AllCategories = () => {

    const [categories,setCategories] = useState([])
    



    useEffect(()=>{
        fetch('https://reread-server.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>{
            setCategories(data)
        })
    },[])

    return (
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>

        {
            categories?.map(category =><Categoriesloaded key={category.category_id} 
                category={category}
                ></Categoriesloaded>)
        }

       </div>
    );
};

export default AllCategories;