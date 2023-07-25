import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'reactstrap'; // Import Button component from reactstrap
import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import {
  ChatBubbleLeftIcon as ChatBubbleLeftIconO,
  HeartIcon as HeartIconO,
} from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

function PostContent({ title, content, postId }) {
  const navigate = useNavigate();
  const [likePost, setLikePost] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);

  // Rest of the code...

  return (
    <>
      <h1 className="text-black text-2xl mb-4 ms-4">{title}</h1>
      <p className="text-black ms-4 ps-1">{content}</p>
      <div className="d-flex mt-4">
        <Button
          className="d-flex align-items-center space-2 hover:bg-card px-3 py-2 rounded-lg duration-150 hover:cursor-pointer"
          color="light"
        >
          {likePost ? (
            <>
              <HeartIcon className="h-6 w-6 text-danger" />
              <span className="text-white">取消喜歡</span>
            </>
          ) : (
            <>
              <HeartIconO className="h-6 w-6 text-danger" />
              <span className="text-black">喜歡</span>
            </>
          )}
        </Button>
        <Button
          className="d-flex align-items-center space-2 hover:bg-card px-3 py-2 rounded-lg duration-150 hover:cursor-pointer"
          color="light"
          onClick={() => {
          }}
        >
          {showCommentBox ? (
            <ChatBubbleLeftIcon className="h-6 w-6 text-primary" />
          ) : (
            <ChatBubbleLeftIconO className="h-6 w-6 text-primary" />
          )}

          <span className="text-black">留言</span>
        </Button>
      </div>
    </>
  );
}

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
};

export default PostContent;
