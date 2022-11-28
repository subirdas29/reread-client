import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


import useSeller from '../../hooks/useSeller';
import { BookLoaderComponent } from '../../Pages/Shared/BookLoader/BookLoaderComponent';

const SellerRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isSeller,sellerLoading]=useSeller(user?.email)
    const location = useLocation();
    if(loading || sellerLoading)
    {
        return <BookLoaderComponent></BookLoaderComponent>
    }

    if (user && isSeller){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SellerRouter;