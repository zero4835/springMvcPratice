import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostContent from '../components/post/PostContent'
import UserInfoCard from '../components/user/UserInfoCard'
import { useParams } from 'react-router-dom'
import BoardTag from '../components/board/BoardTag'

function Post() {
  const { postId } = useParams()
  const [postData, setPostData] = useState()s
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/post/${postId}`
      )
      setPostData(response.data)
    } catch (error) {
      console.log(error)
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/api/comments/post/${postId}`
      )
      setCommentData(response.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return loading ? (
    <></>
  ) : (
    <div>
      <div className="mx-12">
        <UserInfoCard
          userName={postData.post.user.userName}
          userIcon={postData.post.user.imgUrl}
          fansCount={postData.fansCount}
          followingCount={postData.followingCount}
        />
      </div>
      <div className="mx-12">
        <BoardTag
          boardId={postData.post.board.boardId}
          boardIcon={postData.post.board.iconUrl}
          boardName={postData.post.board.boardName}
        />
      </div>
      <div className="mx-12 mt-12">
        <PostContent
          title={postData.post.title}
          content={postData.post.content}
          postId={postData.post.postId}
          userIcon={postData.post.user.imgUrl}
        />
        <hr className="border-gray-700 my-8" />
      </div>
    </div>
  )
}

export default Post
