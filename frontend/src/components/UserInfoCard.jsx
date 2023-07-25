import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'

function userInfoCard({ userName, userIcon }) {
  return (
    <>
      <div className="flex w-full justify-between">
        {/* User Name and icon */}
        <div className="flex items-center space-x-6">
          <img
            className="d-flex mt-3 ms-3"
            style={{ height: '30px', width: '30px', borderRadius: "100%" }}
            src={userIcon}
            alt=""
          />
          <p className="d-flex mt-3 ms-3 text-black tracking-[.7rem] text-3xl font-bold">
            {userName}
          </p>
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
