import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext)
    if (!user) {
        return <Navigate to={'/'} replace />
    }
    return children ? children : <Outlet />
}

export default ProtectedRoute