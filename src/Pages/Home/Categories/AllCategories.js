import React, { useEffect, useState } from 'react';
import Categoriesloaded from './Categoriesloaded';

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch('https://reread-server.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false); // Update loading state when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Handle error and update loading state
      });
  }, []);

  return (
    <div className='my-24' id='cat'>
      <h2 className='text-4xl font-bold text-center'>Categories</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10'>
        {
        isLoading ? (
          // Display skeleton loaders while data is being fetched
          <>
    <div className="flex basis-1/3 flex-col m-8 rounded shadow-md sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-[#d8d8d8]"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 ">
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-3/4 h-6 rounded dark:bg-[#d8d8d8]"></div>
	</div></div>
    <div className="flex-2 basis-1/3 flex-col m-8 rounded shadow-md sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-[#d8d8d8]"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 ">
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-3/4 h-6 rounded dark:bg-[#d8d8d8]"></div>
	</div></div>
    <div className="flex-2 basis-1/3 flex-col m-8 rounded shadow-md sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-[#d8d8d8]"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 ">
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-3/4 h-6 rounded dark:bg-[#d8d8d8]"></div>
	</div></div>

  </>
        ) : (
          // Display fetched categories when loading is complete
          categories.map((category) => (
            <Categoriesloaded
              key={category.category_id}
              category={category}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllCategories;




// import Categoriesloaded from './Categoriesloaded';

// const AllCategories = () => {

//     const [categories,setCategories] = useState([])
    



//     useEffect(()=>{
//         fetch('https://reread-server.vercel.app/categories')
//         .then(res=>res.json())
//         .then(data=>{

//                 setCategories(data); 

//         })
//     },[])

//     return (
//        <div className=' my-24' id='cat'>
//          <h2 className='text-4xl font-bold text-center'>Categories</h2>
//        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10 '>
        

//         {
//             categories?.map(category =><Categoriesloaded key={category.category_id} 
//                 category={category}
//                 ></Categoriesloaded>)
//         }

//        </div>
//        </div>
//     );
// };

// export default AllCategories;