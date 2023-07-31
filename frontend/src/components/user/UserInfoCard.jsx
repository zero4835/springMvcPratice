import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function userInfoCard({ userName, userIcon, userId}) {
  return (
    <>
      <div className="d-flex justify-content-center">
        {/* User Name and icon */}
        <div className="d-flex justify-content-center align-items-center">
          <Link to={`/user/${userId}`}>
            <img
              className="d-flex mt-3 ms-3"
              style={{ height: '30px', width: '30px', borderRadius: "100%" }}
              src={userIcon}
              alt=""
            />
          </Link>
          <div className="d-flex mt-3 ms-3 ">
            {userName}
          </div>
        </div>
        {/* Follow info */}
      </div>
    </>
  )
}

userInfoCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userIcon: PropTypes.string.isRequired,
  fansCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
}

export default userInfoCard
