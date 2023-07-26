import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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

  const handleSubmit = (e) => {

  };

  const handleChange = (e) => {

  };

  return (
    <>
      <div>
        <Container className="mt-3">
          <h2>New Post</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <select class="custom-select">
                <option selected>Board</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
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