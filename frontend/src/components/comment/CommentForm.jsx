import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const CommentForm = ({ PostData }) => {
  const [token, setToken] = useState(localStorage.getItem('jwt_token'));
  //  Let user from text type to js object 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [newComment, setNewComment] = useState([]);
  const [commentText, setCommentText] = useState('');

  const requierdInformation = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  };

  const updateComment = async () => {
    setNewComment({
      content: commentText,
      user: user,
      post: PostData
    });

    try {
      const response = await fetch('/api/comment/', requierdInformation);
      if (!response.ok) throw new Error('Error updating comment');
      const comment = await response.json();
      setNewComment(comment);
      console.log(comment);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newComment);
    updateComment();
    // 清空評論文字
    setCommentText('');
  };

  return (
    <Container fluid>
      <form onSubmit={handleSubmit}>
        <div className="d-flex mb-2">
          <div className="flex-grow-1">
            <label htmlFor="commentText" className="form-label ms-1">
              Comment
            </label>
            <textarea
              className="form-control"
              id="commentText"
              rows="2"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex align-items-center ms-2 mt-4 pt-2 ">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

CommentForm.propTypes = {};

export default CommentForm;
