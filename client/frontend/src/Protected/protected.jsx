
import { Navigate } from 'react-router-dom'
import React from 'react'

 const ProtectedPages = ({children}) => {
  const isAuthenticated = true;
  if(!isAuthenticated){
    return <Navigate to={'/auth/user/login/'} replace/>
  }
  return children
}

export default ProtectedPages;
