import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent'

export default function ProfileUserPage () {
  const [user, setUser] = useState({})

  const { id } = useParams()
  useEffect(() => {
    const getProfile = async () => {
      const user = await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/users/${parseInt(id)}`
      })

      const { data } = user

      setUser(data)
    }

    getProfile()
  }, [])

  return (
    <div>
      <NavbarComponent />
      <div className='container'>
        <div class='row height d-flex justify-content-center align-items-center'>
          <h3>Detail Proile User Page</h3>
          <div class='col-md-8'>
            <div class='profile-detail-user'>
              <h4>username: {user.username}</h4>
              <h4>email: {user.email}</h4>
              <h4>phone: {user.phone}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
