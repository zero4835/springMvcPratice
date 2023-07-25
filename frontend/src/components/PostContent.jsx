import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid'
import {
  PaperAirplaneIcon,
  ChatBubbleLeftIcon as ChatBubbleLeftIconO,
  HeartIcon as HeartIconO,
} from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

function PostContent({ title, content, postId }) {

  const navigate = useNavigate();
  const [likePost, setLikePost] = useState(false)
  const [showCommentBox, setShowCommentBox] = useState(false)
  const [commentContent, setCommentContent] = useState('')
  const [ownAvatar, setOwnAvatar] = useState('')

  const auth = () => {
    if (!localStorage.getItem('jwt_token')) ;
    else return true
  }

  const fetchData = async () => {
    try {
      const res1 = await fetch(`http://localhost:8080/api/post/like/${postId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        },
      });
      if (!res1.ok) {
        throw new Error('獲取文章失敗');
      }
      const data1 = await res1.json();
      setLikePost(data1);
    } catch (error) {
      console.log(error);
    }
  
    try {
      const res2 = await fetch('http://localhost:8080/api/users/tokenId/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        },
      });
      if (!res2.ok) {
        throw new Error('獲取用戶資訊失敗');
      }
      const data2 = await res2.json();
      setOwnAvatar(data2.imgUrl);
    } catch (error) {
      console.log(error);
    }
  };
  
  const updateLikePost = async () => {
    auth();
    try {
      if (likePost) {
        await fetch(`http://localhost:8080/api/likePosts/${postId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
          },
        });
      } else {
        await fetch(`http://localhost:8080/api/likePosts/${postId}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
          },
          body: JSON.stringify({}),
        });
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  
  
  

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1 className="text-black text-2xl tracking-[.35rem] mb-4">{title}</h1>
      <p className="text-tGray tracking-[.25rem]">{content}</p>
      <div className="flex mt-8 space-x-6 -mx-4">
        <button
          className="flex items-center space-x-2 hover:bg-card px-3 py-2 rounded-lg duration-150 hover:cursor-pointer"
          onClick={() => updateLikePost()}
        >
          {likePost ? (
            <>
              <HeartIcon className="h-6 w-6 text-rose-500" />
              <span className="text-white tracking-[.4rem]">取消喜歡</span>
            </>
          ) : (
            <>
              <HeartIconO className="h-6 w-6 text-rose-500" />
              <span className="text-black tracking-[.4rem]">喜歡</span>
            </>
          )}
        </button>
        <button
          className="flex items-center space-x-2 hover:bg-card px-3 py-2 rounded-lg duration-150 hover:cursor-pointer"
          onClick={() => {
            auth() && setShowCommentBox(!showCommentBox)
          }}
        >
          {showCommentBox ? (
            <ChatBubbleLeftIcon className="h-6 w-6 text-sky-500" />
          ) : (
            <ChatBubbleLeftIconO className="h-6 w-6 text-sky-500" />
          )}

          <span className="text-black tracking-[.4rem]">留言</span>
        </button>
      </div>
    </>
  )
}

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
}

export default PostContent
