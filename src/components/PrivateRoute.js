import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import React from 'react'

const PrivateRoute = ({children}) => {
    const { auth } = useSelector(store => store)
    
    if (!auth) {
        return <Navigate to='/login' />
    }
    
    return children
}

export default PrivateRoute;