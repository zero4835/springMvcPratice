import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const AddMember = () => {
  const navigate = useNavigate();

  const [member, setMember] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    imgUrl: null // 預設為null
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'file') {
      setMember((prevMember) => ({ ...prevMember, [name]: event.target.files[0] }));
    } else {
      setMember((prevMember) => ({ ...prevMember, [name]: value }));
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('email', member.email);
      formData.append('password', member.password);
      formData.append('firstName', member.firstName);
      formData.append('lastName', member.lastName);
      formData.append('imgUrl', member.imgUrl); // 將文件加入member中

      const response = await fetch('/api/members', {
        method: 'POST',
        body: formData
      });

      if (response.status === 200) {
        alert('Success');
        navigate('/members');
      } else {
        alert('Error ' + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className="mt-3">
        <h2>Add Member</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              value={member.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              value={member.password}
              onChange={handleChange}
            />
          </FormGroup>
          <div className="row">
            <FormGroup className="col-md-6">
              <Label for="firstName">firstName</Label>
              <Input
                type="text"
                name="firstName"
                value={member.firstName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="lastName">lastName</Label>
              <Input
                type="text"
                name="lastName"
                value={member.lastName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="imgUrl">ImgUrl</Label>
              <Input
                type="file" // 使用文件類型
                name="imgUrl"
                onChange={handleChange}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Button color="primary" type="submit">Submit</Button>{' '}
            <Button color="secondary" tag={Link} to="/members">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

export default AddMember;
