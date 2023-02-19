import { Link } from 'react-router-dom'

export default function NavbarComponent () {
  const getUser = JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      <nav class='navbar navbar-light'>
        <div class='container-fluid'>
          <span class='navbar-brand mb-3 mt -5 h1'>
            <a class='navbar-brand' href='/posts'>
              Cinta Coding
            </a>
          </span>
          <span class='d flex'>
            Welcome, <Link to={`/users/${getUser.id}`}>{getUser.username}</Link>
          </span>
        </div>
      </nav>
    </div>
  )
}
