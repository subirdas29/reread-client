import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { BookLoaderComponent } from '../../Pages/Shared/BookLoader/BookLoaderComponent';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    let location = useLocation();
    if(loading)
    {
        return <BookLoaderComponent></BookLoaderComponent>
    }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRouter;