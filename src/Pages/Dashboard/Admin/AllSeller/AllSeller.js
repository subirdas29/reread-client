import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const {user} =useQuery(user)

    const {data:sellers=[],refetch,isLoading} = useQuery({
        queryKey: ['appointmentOptions',user?.email],
        queryFn: async()=>{
           const res = await fetch(`http://localhost:5000/appointmentOptions?email=${user?.email}`)
           const data = await res.json()
           return data;
        }
        })
    return (
        <div>
            <h3>this is seller</h3>
        </div>
    );
};

export default AllSeller;