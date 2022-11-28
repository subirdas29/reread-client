import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import app from '../../../../firebase/firebase.config';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
const AllSeller = () => {


  
  const [deleteBook,setDeleteBook]= useState(null)
  console.log(deleteBook)


  const deleteBookDetails = ()=>
  {
      setDeleteBook(null)
  }


    const {data:sellers=[],refetch,isLoading} = useQuery({
        queryKey: ['allseller'],
        queryFn: async()=>{
           const res = await fetch(`http://localhost:5000/users/allseller`)
           const data = await res.json()
           return data;
        }
        })

        
        const handleDeleteBook = seller => {
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

      const handleUpdateStatus =(id,email)=>{

        fetch(`http://localhost:5000/allbooks/${email}`,{
          method:'PATCH',
         
        })
        .then(res => res.json())
          .then(data => {
            console.log(data)
            refetch()
              // if(data.deletedCount > 0){
              //     refetch();
              //     toast('successfully deleted')
              // }
          })

        fetch(`http://localhost:5000/users/allseller/${id}`,{
          method:'PATCH',
         
        })
        .then(res => res.json())
          .then(data => {
            console.log(data)
            refetch()
              // if(data.deletedCount > 0){
              //     refetch();
              //     toast('successfully deleted')
                  
              // }
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
        <th>Status</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
  
      {
        sellers?.map((seller,i)=> 
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
{       
         seller.status==='verified' ? <label className="btn" disabled onClick={()=>handleUpdateStatus(seller?._id,seller?.email)}
         >{seller.status}</label> : <label className="btn" onClick={()=>handleUpdateStatus(seller?._id,seller?.email)}
         >{seller.status}</label>     
}

   

</th>
            <th>
<label className="btn btn-error" onClick={()=>setDeleteBook(seller)}
htmlFor="confirmation-modal" >Delete</label>
  
</th>
            
          </tr>)
      }


{
        deleteBook && <ConfirmationModal deleteBookDetails ={deleteBookDetails}
        Delete={handleDeleteBook}
        deleteBook={deleteBook}
        deleteMessage = {`Delete`}
        title={`Are you sure you want to delete?`}
        message = {`If you delete ${deleteBook.name}. It cannot be undone`}
        ></ConfirmationModal>
      }
    </tbody>
   
    
  </table>
</div>
</div>






          
       
    );
};

export default AllSeller;