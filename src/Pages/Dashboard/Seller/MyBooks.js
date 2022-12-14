import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyBooks = () => {
  const { user } = useContext(AuthContext)
  const [deleteBook, setDeleteBook] = useState(null)
 


  const deleteBookDetails = () => {
    setDeleteBook(null)
  }


  const { data: books, isLoading, refetch } = useQuery({
    queryKey: ['allbuyer'],
    queryFn: async () => {
      try {
        const res = await fetch(`https://reread-server.vercel.app/allbooks/${user?.email}`, {
          headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
      }
      catch (error) {

      }
    }
  });
  if (isLoading) {
    return <div>loading</div>
  }

  const handleDeleteBook = book => {
    fetch(`https://reread-server.vercel.app/allbooks/${book._id}`, {
      method: 'DELETE',
      // headers: {
      //     authorization: `bearer ${localStorage.getItem('accessToken')}`
      // }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast('successfully deleted')

        }
      })
  }


  const handleAdvertiseSubmit = id => {
    fetch(`https://reread-server.vercel.app/allbooks/${id}`, {
      method: 'PATCH',

      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          refetch();
          toast('Book added for Advertisment')

        }
      })
  }

  return (


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
            books?.map(book => <tr key={book._id}>
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
                <br />
                <span className="badge badge-ghost badge-sm">{book.location}</span>
              </td>
              <td>Available</td>
              <td>
                {
                  book.advertisement==="true" ?
                    <button className="btn btn-ghost" disabled>Advertised</button>
                    :
                    <button className="btn btn-primary" onClick={() => handleAdvertiseSubmit(book._id)}>Advertise</button>
                }

              </td>
              <th>
                <label htmlFor="confirmation-modal" className="btn btn-error" onClick={() => setDeleteBook(book)}>
                  Delete</label>

              </th>
            </tr>)
          }

          {
            deleteBook && <ConfirmationModal deleteBookDetails={deleteBookDetails}
              Delete={handleDeleteBook}
              deleteBook={deleteBook}
              deleteMessage={`Delete`}
              title={`Are you sure you want to delete?`}
              message={`If you delete ${deleteBook.name}. It cannot be undone`}
            ></ConfirmationModal>
          }



        </tbody>



      </table>

    </div>



  );
};

export default MyBooks;