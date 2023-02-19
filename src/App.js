import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PublicRoutes from './routers/PublicRouters'
import PrivateRoutes from './routers/PrivateRouters'
import DetailDashboardPage from './pages/DetailDashboard'
import ProfileUserPage from './pages/ProfileUserPage'

function App () {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path='/login'
            element={
              <PublicRoutes>
                <LoginPage />
              </PublicRoutes>
            }
          ></Route>
          <Route
            path='/posts'
            element={
              <PrivateRoutes>
                <DashboardPage />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path='/posts/:id'
            element={
              <PrivateRoutes>
                <DetailDashboardPage />
              </PrivateRoutes>
            }
          ></Route>

          <Route
            path='/users/:id'
            element={
              <PrivateRoutes>
                <ProfileUserPage />
              </PrivateRoutes>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
