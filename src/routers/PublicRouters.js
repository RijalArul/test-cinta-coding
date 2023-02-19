import { Navigate, useLocation } from 'react-router-dom'

function PublicRoutes ({ children }) {
  let location = useLocation()

  if (localStorage.getItem('user')) {
    return <Navigate to='/posts' state={{ from: location }} />
  }

  return children
}

export default PublicRoutes
