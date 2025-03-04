import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
  const {postId} = useParams()
  console.log(postId)
  return (
    <div>
      
    </div>
  )
}

export default Post
