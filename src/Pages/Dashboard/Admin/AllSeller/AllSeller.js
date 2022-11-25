import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
const AllSeller = () => {

  

    const {data:sellers=[],refetch,isLoading} = useQuery({
        queryKey: ['allseller'],
        queryFn: async()=>{
           const res = await fetch(`http://localhost:5000/users/allseller`)
           const data = await res.json()
           return data;
        }
        })

        
        const handleDeleteSeller = seller => {
          fetch(`http://localhost:5000/users/allseller/${seller._id}`, {
              method: 'DELETE', 
              // headers: {
              //     authorization: `bearer ${localStorage.getItem('accessToken')}`
              // }
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
                  refetch();
                  toast('successfully deleted')
                  
              }
          })
      }
    return (
        <div>
       <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
  
      {
        sellers.map((seller,i)=> 
        <tr key={seller._id}>
            <th>
              <label>
                <td>{i+1}</td>
              </label>
            </th>
            <td> 
              
                  <div className="font-bold">{seller.name}</div>
                
            </td>
            <td>
            {seller.email}
            </td>
            <td>{seller.role}</td>
            <th>
<label className="btn btn-error" onClick={()=>handleDeleteSeller (seller)}
htmlFor="confirmation-modal" >Delete</label>
  
</th>
            
          </tr>)
      }
    </tbody>
   
    
  </table>
</div>
</div>






          
       
    );
};

export default AllSeller;