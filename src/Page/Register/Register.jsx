import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container className='mt-5 px-5'>
                <Row className='d-flex justify-content-center'>
                    <Col md={4} className='border rounded px-4 py-3'>
                        <h3 className='mb-4'>Create an account</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="First Name" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Last Name" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Username or Email" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm Password" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>

                            <Button variant="warning" type="submit" className='w-100 rounded-0'>
                                Submit
                            </Button>
                            <p className='mt-4'>
                                <small>
                                    Don't have an account? <Link to="/page/login" className='text-warning'>Login</Link>
                                </small>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;