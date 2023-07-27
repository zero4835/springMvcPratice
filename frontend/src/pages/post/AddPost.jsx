import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SelectComponent from '../../components/ui-component/SelectComponent';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const AddPost = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem('jwt_token'));
  const [post, setPost] = useState([]);
  const [boards, setBoards] = useState([]);
  const [board, setBoard] = useState([]);
  const [value, setValue] = useState([]);
  const [user, setUser] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPost((prevPost) => ({
      ...prevPost,
      "user": user,
      "board": board
    }))
    console.log(post);

    try {
      const response = await fetch("/api/post/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(post), // Convert the post data to JSON and send it in the request body
      });

      if (response.ok) {
        console.log("Post created successfully!");
        // Clear the form fields after successful submission
        navigate("/");
      } else {
        console.error("Failed to create post.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const fetchBoards = async () => {
    try {
      const response = await fetch('/api/board/');
      if (!response.ok) throw new Error("Boards fetch failed");
      const boardList = await response.json();
      setBoards(boardList);
      console.log(boardList);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchBoard = async () => {
    try {
      const response = await fetch(`/api/board/getBoardByName/${value}`);
      if (!response.ok) throw new Error("Board fetch failed");
      const selectBoard = await response.json();
      setBoard(selectBoard);
      console.log(selectBoard);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/getIdbyToken", {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, [token])

  useEffect(() => {
    fetchBoard();
    fetchUser();
  }, [value])

  return (
    <>
      <div>
        <Container className="mt-3">
          <h2>New Post</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mt-3">
              <SelectComponent value={value} setValue={setValue} datas={boards} />
            </FormGroup>
            <FormGroup>
              <Label for="Title">Title</Label>
              <Input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="content">Content</Label>
              <textarea
                className="form-control"
                rows="3"
                name="content"
                value={post.content}
                onChange={handleChange}>
              </textarea>
            </FormGroup>
            <FormGroup className="d-flex">
              <Button className="d-flex m-auto" color="primary" type="submit">Submit</Button>
              <Button className="d-flex m-auto" color="secondary" tag={Link} to="/">Cancel</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    </>
  )
}

export default AddPost; 