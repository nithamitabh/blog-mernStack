import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img className ="postImg" src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className='postCat'>Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet s</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className = "postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem quos ex esse eos! Deleniti nam impedit tempora at itaque excepturi magni dolor quisquam iusto enim. Maxime labore quos rerum.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente non corporis magni nulla est excepturi nisi, ipsum eius soluta dolor ipsam, at, suscipit natus iste fugit consectetur repellendus nesciunt.</p>
    </div>
  )
}

export default Post
