import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import { Vortex } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import useSeller from '../../hooks/useSeller';


const SellerRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isSeller,sellerLoading]=useSeller(user?.email)
    const location = useLocation();
    if(loading || sellerLoading)
    {
        return <>
        {/* <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/> */}

<div>loading...</div>
        </>
    }

    if (user && isSeller){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SellerRouter;