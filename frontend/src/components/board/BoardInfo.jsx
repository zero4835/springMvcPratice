import React, { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

function BoardInfo({ boardId, boardIcon, boardName, boardDescription }) {
  const [followBoard, setFollowBoard] = useState(false);
  const token = localStorage.getItem('jwt_token');

  useEffect(() => {
    console.log(boardIcon);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center row mt-3">
        <div className="d-flex justify-content-center">
          <img
            alt=""
            className=""
            src={boardIcon}
            width="60px"
            height="60px"
          />
        </div>
        <div className="d-flex text-black justify-content-center mt-1">
          {boardName}
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-black ">
            {boardDescription}
          </p>
        </div>
      </div>
    </>
  );
}

BoardInfo.propTypes = {
  boardId: PropTypes.number.isRequired,
  boardIcon: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  boardDescription: PropTypes.string.isRequired,
};

export default BoardInfo;
