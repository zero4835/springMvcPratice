import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserAvatarName({ userId, userIcon, userName }) {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-link d-flex align-items-center gap-2"
      style={{ textDecoration: 'none' }}
      onClick={() => navigate(`/user/${userId}`)}
    >
      <div
        className="rounded-circle overflow-hidden mb-1"
        style={{ width: '48px', height: '48px' }}
      >
        <img
          src={userIcon}
          alt={userName}
          className="w-100 h-100 object-cover"
        />
      </div>
      <p className="text-black text-2xl fw-semibold">{userName}</p>
    </button>
  );
}

UserAvatarName.propTypes = {
  userId: PropTypes.number.isRequired,
  userIcon: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default UserAvatarName;
