import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';

const msg =()=>{

    toast.info('You have to login First!!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

function Protected()
{
    
    const token = localStorage.getItem('access-token');
    if(!token)
    {
        return (<>
            {msg()}
            <Navigate to="/login" />
        </>);
    }
    return (
        <Outlet />
    );

}

export default Protected;