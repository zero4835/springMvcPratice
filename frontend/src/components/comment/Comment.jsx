import React from 'react';
import UserAvatarName from '../user/UserAvatarName';
import PropTypes from 'prop-types';

function Comment({ userId, userIcon, userName, commentText, createTime}) {

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
  
  return (
    <div className="mb-auto d-flex flex-column">
      <UserAvatarName userId={userId} userName={userName} userIcon={userIcon} />
      <p className="text-muted small ms-3">{commentText}</p>
      <div style={{ position: 'relative', marginTop: 'auto' }}>
        <p className="text-right text-black" style={{ position: 'absolute', bottom: 0, right: 5 }}>
          {formatDate(createTime)}
        </p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  userId: PropTypes.number.isRequired,
  userIcon: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
};

export default Comment;
