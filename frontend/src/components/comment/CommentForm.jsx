import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const CommentForm = ({ PostData }) => {
  const [token, setToken] = useState(localStorage.getItem('jwt_token'));
  //  Let user from text type to js object 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [newComment, setNewComment] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const requierdInformation = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  };

  const updateComment = async () => {
    setIsSubmitting(true); // Set isSubmitting to true before submitting, indicating that it is being submitted
    setNewComment({
      content: commentText,
      user: user,
      post: PostData
    });
    console.log(commentText);
    console.log(user);
    console.log(PostData);
    try {
      const response = await fetch('/api/comment/', requierdInformation);
      if (!response.ok) throw new Error('Error updating comment');
      const comment = await response.json();
      setNewComment(comment);
      setSubmissionMessage('successfully!'); // When susses set message
      console.log(comment);
    } catch (e) {
      console.log(e);
      setSubmissionMessage('Failed'); // when false set message
    } finally {
      setIsSubmitting(false); // Only when isSubmitting is false, the submit operation is performed
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isSubmitting) { // Only when isSubmitting is false, the submit operation is performed
      console.log(newComment);
      updateComment();
      // clear Textarea
      setCommentText('');
    }
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
          <div className="d-flex align-items-center ms-2 mt-4 pt-2">
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          {submissionMessage && (
          <div className="text-center ms-2 mt-5 pt-1 d-flex align-items-center">
            <p>{submissionMessage}</p>
          </div>
        )}
        </div>
        
      </form>
    </Container>
  );
};

CommentForm.propTypes = {
  PostData: PropTypes.any.isRequired
};

export default CommentForm;
