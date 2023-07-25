import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'

function userInfoCard({ userName, userIcon }) {
  return (
    <>
      <div className="d-flex justify-content-center">
        {/* User Name and icon */}
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="d-flex mt-3 ms-3"
            style={{ height: '30px', width: '30px', borderRadius: "100%" }}
            src={userIcon}
            alt=""
          />
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
