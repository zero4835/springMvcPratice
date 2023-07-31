import React from 'react'
import { useEffect, useState } from 'react'
import PostContent from '../../components/post/PostContent'
import UserInfoCard from '../../components/user/UserInfoCard'
import { useParams } from 'react-router-dom'
import BoardTag from '../../components/board/BoardTag'

function Post() {
  const { postId } = useParams()
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const postResponse = await fetch(`http://localhost:8080/api/post/${postId}`);
      if (!postResponse.ok) {
        throw new Error('獲取文章失敗');
      }
      const postData = await postResponse.json();
      setPostData(postData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  

  useEffect(() => {
    fetchData()
  }, [])

  return loading ? (
    <></>
  ) : (
    <div>
      <div className="mx-12">
        <UserInfoCard
          userName={postData.user.firstName}
          userIcon={postData.user.imgUrl}
          userId={postData.user.mid}
        />
      </div>
      <div className="mb-2">
        <BoardTag
          boardId={postData.board.id}
          boardIcon={postData.board.iconUrl}
          boardName={postData.board.boardName}
        />
      </div>
      <div className="mx-12 mt-12">
        <PostContent
          title={postData.title}
          content={postData.content}
          postId={postData.id}
          userIcon={postData.user.imgUrl}
        />
        <hr className="border-gray-700 my-8" />
      </div>
    </div>
  )
}

export default Post
