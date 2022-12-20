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
        <div>
            <h2 className='text-4xl font-bold text-center'>Advertisement</h2>
        <div className='my-20 grid grid-cols-2 md:grid-cols-3 gap-10'>
           
           {
             adBooks?.map(book=> <AdvertismentCard key={book._id} book={book}  handleBookedSubmit={handleBookedSubmit}></AdvertismentCard>)
           }
        </div>
        </div>
    );
};

export default Advertisement;