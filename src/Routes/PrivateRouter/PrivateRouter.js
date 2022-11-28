import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Vortex } from  'react-loader-spinner'


const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    let location = useLocation();
    if(loading)
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

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRouter;