import React from 'react';
import PropTypes from 'prop-types';
import BoardTag from './BoardTag';

function PostPreview({
  postId,
  title,
  contentPreview,
  userIcon,
  userName,
  boardName,
  boardIcon,
  boardId,
}) {
  return (
    <a href={`/post/${postId}`} style={{ textDecoration: 'none' }}>
      <hr className="border-gray-700 m-1" />
      <div className="d-flex align-items-center space-x-5">
        {/* User Info */}
        <img
          alt=""
          src={userIcon}
          className="mt-2 ms-2 rounded-circle"
          height="30px"
          width="30px"
        />
        <div className="text-black ms-2 mt-2">{userName}</div>
      </div>
      {/* Content */}
      <div className="d-flex flex-column mt-2 ms-3 ">
        <h1 className="text-black tracking-[.4rem] fs-3">{title}</h1>
        <p className="text-black tracking-[.3rem] fs-6 ms-3">{contentPreview}</p>
      </div>
      {/* Board Tag */}
      {/* <BoardTag
        boardIcon={boardIcon}
        boardId={boardId}
        boardName={boardName}
      /> */}
      <hr className="border-gray-700" />
    </a>
  );
}

PostPreview.propTypes = {
  postId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  contentPreview: PropTypes.string.isRequired,
  userIcon: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  boardIcon: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired,
};

export default PostPreview;
