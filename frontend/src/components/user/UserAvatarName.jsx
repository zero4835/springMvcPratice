import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserAvatarName({ userId, userIcon, userName }) {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-link d-flex gap-2 mt-2"
      style={{ textDecoration: 'none' }}
      onClick={() => navigate(`/user/${userId}`)}
    >
      <div
        className="rounded-circle overflow-hidden me-1"
        style={{ width: '35px', height: '35px', marginTop: '-10px' }}
      >
        <img
          src={userIcon}
          alt={userName}
          className="w-100 h-100 object-cover"
        />
      </div>
      <p className="text-black text-2xl fw-semibold m-0">{userName}</p>
    </button>
  );
}

UserAvatarName.propTypes = {
  userId: PropTypes.number.isRequired,
  userIcon: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default UserAvatarName;
