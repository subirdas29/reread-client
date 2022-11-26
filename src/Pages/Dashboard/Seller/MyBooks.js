import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyBooks = () => {
    const {user} = useContext(AuthContext)

    const { data: books, isLoading, refetch } = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/allbooks?email=${user?.email}`, {
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
            
            <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
        
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Status</th>
        <th>Advertise</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
    books?.map(book=> <tr key={book._id}>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={book.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{book.book_name}</div>
             
            </div>
          </div>
        </td>
        <td>Resale Price: 
         ${book.resale_price}
          <br/>
          <span className="badge badge-ghost badge-sm">{book.location}</span>
        </td>
        <td>Available</td>
        <th>
        <button className="btn btn-primary">Advertise</button>
         
        </th>
        <th>
        <button className="btn btn-error">Delete</button>
        </th>
      </tr>)
        }
    

    </tbody>
    
    
  </table>
</div>


        </div>
    );
};

export default MyBooks;