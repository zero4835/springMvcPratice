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
        lastName: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMember((prevMember) => ({ ...prevMember, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/members', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(member)
            });

            if (response.status === 200) {
                alert('Success');
                navigate('/members');
            } else {
                alert('error ' + response.status);
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
