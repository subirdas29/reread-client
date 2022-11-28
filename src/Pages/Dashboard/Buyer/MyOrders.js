import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {

  const { data: myorders, isLoading, refetch } = useQuery({
      
    queryKey: ['allbooks'],
    queryFn: async () => {
        try {
            const res = await fetch('https://reread-server.vercel.app/myorders', {

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


      <div></div>
//         <div className="overflow-x-auto w-full">
//   <table className="table w-full">
   
//     <thead>
//       <tr>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <th>Book Name</th>
//         <th>Price</th>
//         <th>Status</th>
       
//       </tr>
//     </thead>
//     <tbody>
//       {
//         myorders?.map(myorder =>  <tr key={myorder._id}>
//           <th>
//             <label>
//               <input type="checkbox" className="checkbox" />
//             </label>
//           </th>
//           <td>
//             <div className="flex items-center space-x-3">
//               <div className="avatar">
//                 <div className="mask mask-squircle w-12 h-12">
//                   <img src={myorder.img} alt="Avatar Tailwind CSS Component" />
//                 </div>
//               </div>
//               <div>
//                 <div className="font-bold">{myorder.name}</div>
//                 <div className="text-sm opacity-50">{myorder.resale_price}</div>
//               </div>
//             </div>
//           </td>
//           <td>
//             BuyNOw
//             <br/>
           
//           </td>
         
          
//         </tr>)
//       }
    

//     </tbody>
 
   
    
//   </table>
// </div>
    );
};

export default MyOrders;