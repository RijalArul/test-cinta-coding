import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCommentComponent from '../components/CardCommentComponent'
import NavbarComponent from '../components/NavbarComponent'

export default function DetailDashboardPage () {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getPost = async () => {
      const postId = parseInt(id)

      const posts = await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`
      })

      const { data } = posts

      const comments = await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${data.id}/comments`
      })

      setPost(data)
      setComments(comments.data)
    }

    getPost()
  }, [])

  return (
    <div className='container'>
      <NavbarComponent />
      <div class='row height d-flex justify-content-center align-items-center'>
        <h3>Posts Detail Page</h3>
        <div class='col-md-8'>
          <div className='mt-5 mb-5'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <div>
            {comments.map(comment => {
              return <CardCommentComponent comment={comment} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
