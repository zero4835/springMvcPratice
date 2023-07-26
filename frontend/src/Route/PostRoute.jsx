import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Post from '../pages/post/Post'

function PostRoutes() {
  return (
    <Routes>
      <Route path=":postId" element={<Post />} />
      <Route path=""/>
    </Routes>
  )
}

export default PostRoutes
