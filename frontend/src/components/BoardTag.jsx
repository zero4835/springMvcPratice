import React from 'react'
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types'

function BoardTag({ boardId, boardIcon, boardName }) {

  const navigate = useNavigate();
  return (
    <button
      className=" btn btn-outline-light ms-auto"
      onClick={() => (navigate(`/board/${boardId}`))}
    >

      <img
        className="ms-2 me-3"
        alt=""
        src={boardIcon}
        height="45px"
        width="45px"
      />
      <span className="text-black">
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
