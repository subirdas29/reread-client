import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import AdvertismentCard from './AdvertismentCard';

const Advertisement = () => {



    const { data: adBooks, isLoading, refetch } = useQuery({

        
      
        queryKey: ['allbooks'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://reread-server.vercel.app/adbooks?advertisement=${true}`, {

                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }


                });
                const data = await res.json();
                return data;
            }
           
            catch (error) {
 
            }
            console.log(adBooks)
        }
    });
    if (isLoading) {
        return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10'>
        <div className="flex basis-1/3 flex-col m-8 rounded shadow-md sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-[#d8d8d8]"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 ">
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-3/4 h-6 rounded dark:bg-[#d8d8d8]"></div>
	</div></div>
        <div className="flex basis-1/3 flex-col m-8 rounded shadow-md sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-[#d8d8d8]"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 ">
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-3/4 h-6 rounded dark:bg-[#d8d8d8]"></div>
	</div></div>
        <div className="flex basis-1/3 flex-col m-8 rounded shadow-md sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-[#d8d8d8]"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 ">
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-3/4 h-6 rounded dark:bg-[#d8d8d8]"></div>
	</div></div>
        <div className="flex basis-1/3 flex-col m-8 rounded shadow-md sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-[#d8d8d8]"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 ">
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-full h-6 rounded dark:bg-[#d8d8d8]"></div>
		<div className="w-3/4 h-6 rounded dark:bg-[#d8d8d8]"></div>
	</div></div>
        </div>;
      }
    
    const handleBookedSubmit = book =>{
        fetch('https://reread-server.vercel.app/myorders', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
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
        <div className=' py-16'>
            <h2 className='text-4xl font-bold text-center  mb-10 '>Advertisement</h2>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10 '>
           
           {
             adBooks?.map(book=> <AdvertismentCard key={book._id} book={book}  handleBookedSubmit={handleBookedSubmit}></AdvertismentCard>)
           }
        </div>
        </div>
    );
};

export default Advertisement;