import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


import useSeller from '../../hooks/useSeller';

const SellerRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isSeller,sellerLoading]=useSeller(user?.email)
    const location = useLocation();
    if(loading || sellerLoading)
    {
        return <progress className="progress w-56"></progress>
    }

    if (user && isSeller){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SellerRouter;