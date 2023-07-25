import React from 'react'
import { useNavigate } from 'react-router'; 
import PropTypes from 'prop-types'

function BoardTag({ boardId, boardIcon, boardName }) {

  const navigate = useNavigate();
  return (
    <button
      className="flex items-center space-x-4 bg-box rounded-2xl w-fit py-3 pl-4 pr-3 hover:bg-card duration-200"
      onClick={() => (navigate(`/board/${boardId}`))}
    >
      
      {/* <img src={boardIcon} /> */}

      <span className="text-black tracking-[.5rem] text-lg font-semibold">
        {boardName}
      </span>
    </button>
  )
}

BoardTag.propTypes = {
  boardId: PropTypes.number.isRequired,
  boardIcon: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
}

export default BoardTag
