import React, { useState } from 'react';
import { Container, Form, Button  } from 'react-bootstrap';
import './SignUp.css';


const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { firstName, lastName, email, password });
    };
    

    return (
        <Container className='mt-4 mb-5'>
            <h2>Please Registration</h2>
            <Form className='mt-3 ' onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName" className='mb-3'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                />
                </Form.Group>

                <Form.Group controlId="formLastName" className='mb-3'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                />
                </Form.Group>

                <Form.Group controlId="formEmail" className='mb-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                </Form.Group>

                <Form.Group controlId="formPassword" className='mb-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                </Form.Group>

                <Button variant="primary" type="submit">
                Register
                </Button>
            </Form>
        </Container>
    );
};

export default SignUp;