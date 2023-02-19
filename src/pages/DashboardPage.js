import axios from 'axios'
import { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Pagination from '../components/PaginationComponent'
import PostCardComponent from '../components/PostCardComponent'

export default function DashboardPage () {
  const [newPosts, setNewPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const getAllPost = async () => {
      const posts = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
      })
      let newPostData = []

      const { data } = posts
      data.forEach(post => {
        newPostData.push({ post: { post, comments: [], user: {} } })
      })
      newPostData.forEach(async newPost => {
        const { id, userId } = newPost.post.post
        const comments = await axios({
          method: 'GET',
          url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        })

        const { data } = comments

        const user = await axios({
          method: 'GET',
          url: `https://jsonplaceholder.typicode.com/users/${userId}`
        })

        data.forEach(async comment => {
          if (id === comment.postId) {
            newPost.post.comments.push(comment)
            setNewPosts(newPostData)
          }
        })

        if (userId === user.data.id) {
          newPost.post.user = user.data
          setNewPosts(newPostData)
        }
      })
    }

    getAllPost()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = newPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <NavbarComponent />
      <div className='container'>
        <div class='row height d-flex justify-content-center align-items-center'>
          <h3>Posts Page</h3>
          <div class='col-md-8'>
            <div class='search'>
              <input type='text' class='form-control' placeholder='Search' />
              <i class='fa fa-search'></i>
            </div>
            {currentPosts?.map(post => {
              return (
                <PostCardComponent
                  post={post.post.post}
                  comments={post.post.comments}
                  user={post.post.user}
                />
              )
            })}
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={newPosts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
