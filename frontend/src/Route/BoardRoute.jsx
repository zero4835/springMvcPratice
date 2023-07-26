import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Board from '../pages/board/Board'

function BoardRoutes() {
  return (
    <Routes>
      <Route path=":boardId" element={<Board />} />
    </Routes>
  )
}

export default BoardRoutes
