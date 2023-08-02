/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useState } from 'react'
import PostContent from '../../components/post/PostContent'
import UserInfoCard from '../../components/user/UserInfoCard'
import { useParams } from 'react-router-dom'
import BoardTag from '../../components/board/BoardTag'
import Comment from '../../components/comment/Comment'
import CommentForm from '../../components/comment/CommentForm'

function Post() {
  const { postId } = useParams()
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const fetchData = async (postId) => {
    try {
      const postResponse = await fetch(`/api/post/${postId}`);
      if (!postResponse.ok) {
        throw new Error('獲取文章失敗');
      }
      const postData = await postResponse.json();
      setPostData(postData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);

    try {
      const response = await fetch(`/api/comment/post/${postId}`);
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setComments(data);
      console.log(data);

    }
    catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    fetchData(postId)
  }, [postId])

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
        <CommentForm 
          PostData={postData}
        />
        <hr className="border-gray-700 my-1" />
        {comments?.map((data) => (
          <>
            <Comment
              key={data.id}
              userId={data.user.mid}
              userIcon={data.user.imgUrl}
              userName={data.user.firstName}
              commentText={data.content}
              createTime={data.createTime}
            />
            <hr className="border-gray-700 my-1" />
          </>
        ))}
      </div>
    </div>
  )
}

export default Post
