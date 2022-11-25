import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isAdmin,adminLoading]=useAdmin(user?.email)
    const location = useLocation();
    if(loading || adminLoading)
    {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRouter;