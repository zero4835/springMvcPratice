import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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

  const [post, setPost] = useState([]);
  const [boards, setBoards] = useState([]);
  const [board, setBoard] = useState([]);
 
  const handleSubmit = (e) => {

  };

  const handleChange = (e) => {

  };

  const fetchBoard = async () => {
    try{
      const response =await fetch('/api/board/');
      if (!response.ok) throw new Error("Board fetch failed");
      const boardList = await response.json();
      setBoards(boardList);
      console.log(boardList);
    }catch(e){
      console.error(e);
    }
  };

  useEffect(()=>{
    fetchBoard();
  }, [])

  return (
    <>
      <div>
        <Container className="mt-3">
          <h2>New Post</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <SelectComponent value={board} setValue={setBoard} datas={boards}/>
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