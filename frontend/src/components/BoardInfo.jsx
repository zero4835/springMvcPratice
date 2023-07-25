import React, { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

function BoardInfo({ boardId, boardIcon, boardName, boardDescription }) {
  const [followBoard, setFollowBoard] = useState(false);
  const token = localStorage.getItem('jwt_token');

  const auth = () => {
    if (!localStorage.getItem('jwt_token')) return false;
    return true;
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <div className="bg-box h-auto rounded-lg flex">
        <div className="flex flex-col p-8 justify-center items-center">
          <div
            className="h-16 w-16 bg-cover bg-center rounded-full"
            style={{
              backgroundImage: `url(${boardIcon})`,
            }}
          ></div>
          <div className="text-white tracking-[.4rem] ml-2 mt-2 text-2xl">
            {boardName}
          </div>
        </div>
        <div className="flex flex-col w-full justify-between space-y-4 pt-8 pb-4">
          <p className="text-white tracking-[.4rem] pr-12">
            {boardDescription}
          </p>
          <div className="flex justify-end mr-6">
            <HeartIcon
              className={`h-6 w-6 ${
                followBoard
                  ? 'text-red-500 hover:cursor-pointer active:scale-75'
                  : 'text-white hover:cursor-pointer active:scale-75'
              }`}
            />
          </div>
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
