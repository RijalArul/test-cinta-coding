export default function CardCommentComponent ({ comment }) {
  return (
    <div>
      <div
        class='card'
        style={{ width: '100%', marginTop: '45px', marginBottom: '25px' }}
      >
        <div class='card-body'>
          <h5 class='card-title'>{comment.name}</h5>
          <h6 class='card-subtitle mb-2 text-muted'>{comment.body}</h6>
        </div>
      </div>
    </div>
  )
}
