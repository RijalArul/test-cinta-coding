import { Link } from 'react-router-dom'

export default function PostCardComponent ({ post, comments, user }) {
  //   console.log(user)
  return (
    <div>
      <div
        class='card'
        style={{ width: '100%', marginTop: '45px', marginBottom: '25px' }}
      >
        <div class='card-body'>
          <h5 class='card-title'>{user.username}</h5>
          <h6 class='card-subtitle mb-2 text-muted'>{post.title}</h6>
          <a href='#' class='card-link'>
            {comments.length}
          </a>
          {/* <a class='card-link'> */}
          <Link to={`/posts/${post.id}`} class='card-link'>
            Detail
          </Link>
          {/* </a> */}
        </div>
      </div>
    </div>
  )
}
