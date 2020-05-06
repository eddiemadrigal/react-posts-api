import React, {useEffect} from 'react';
import axios from 'axios';

const Posts = ({posts, setPosts}) => {

  const postList = posts.length ? (
    posts.map(post => {
      return (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      )
    })
  ) : (
    <p>No posts yet</p>
  )

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then( res => {
        console.log(res);
        setPosts(res.data.slice(1, 10));
      })
      .catch ( err => {
        console.log(err);
      })
  }, [setPosts])

  return (
    <div>
      <h1>Posts Components</h1>
      <div>{postList}</div>
    </div>
  )
}

export default Posts;