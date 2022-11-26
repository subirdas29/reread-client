import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertismentCard from './AdvertismentCard';

const Advertisement = () => {


    const { data: books, isLoading, refetch } = useQuery({
        queryKey: ['allbooks'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/allbooks', {

                    // headers: {
                    //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                    // }


                });
                const data = await res.json();
                return data;
            }
            catch (error) {
  
            }
        }
    });
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Advertisement</h2>
        <div className='my-20 grid grid-cols-2 md:grid-cols-3 gap-10'>
           
           {
             books?.map(book=><div>
                {
                    book?.advertisement ? <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-96' src={book.img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div> : <p>Nothing have advertisement</p>
                }
            </div>)
           }
        </div>
        </div>
    );
};

export default Advertisement;