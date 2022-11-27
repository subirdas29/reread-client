import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertismentCard from './AdvertismentCard';

const Advertisement = () => {


    const { data: adBooks, isLoading, refetch } = useQuery({
      
        queryKey: ['allbooks'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/adbooks?advertisement=${true}`, {

                    // headers: {
                    //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                    // }


                });
                const data = await res.json();
                return data;
            }
           
            catch (error) {
  
            }
            console.log(adBooks)
        }
    });
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Advertisement</h2>
        <div className='my-20 grid grid-cols-2 md:grid-cols-3 gap-10'>
           
           {
             adBooks?.map(book=> <AdvertismentCard key={book._id} book={book}></AdvertismentCard>)
           }
        </div>
        </div>
    );
};

export default Advertisement;