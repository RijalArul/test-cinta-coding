import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoutes ({ children }) {
  let location = useLocation()

  if (!localStorage.getItem('user')) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return children
}

export default PrivateRoutes
