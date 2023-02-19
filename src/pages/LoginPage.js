import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function LoginPage () {
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllUser () {
      const resp = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
      })

      setUsers(resp.data)
    }

    getAllUser()
  }, [])
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    users.forEach(newUser => {
      if (newUser.username === user.username) {
        localStorage.setItem('user', JSON.stringify(newUser))
        navigate('/posts')
      }
    })
  }
  return (
    <>
      <div className='d-flex align-items-center justify-content-center login-page-class-1'>
        <form>
          <div class='mb-3'>
            <input
              type='text'
              class='form-control form-login-input'
              id='username'
              placeholder='username'
              name='username'
              onChange={e => handleChange(e)}
            />
          </div>
          <div class='mb-3'>
            <input
              type='password'
              class='form-control form-login-input'
              id='exampleInputPassword1'
              placeholder='password'
              name='password'
              onChange={e => handleChange(e)}
            />
          </div>
          <button
            type='submit'
            class='btn btn-primary form-login-submit'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
