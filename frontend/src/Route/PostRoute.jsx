import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Post from '../pages/post/Post'
import AddPost from '../pages/post/AddPost'

function PostRoutes() {
  return (
    <Routes>
      <Route path=":postId" element={<Post />} />
      <Route path="/newpost" element={<AddPost />} />
    </Routes>
  )
}

export default PostRoutes
