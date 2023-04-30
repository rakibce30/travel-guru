import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {


    return (
        <div>
            <Container className='mt-5 px-5'>
                <Row className='d-flex justify-content-center'>
                    <Col md={4} className='border rounded px-4 py-3'>
                        <h3 className='mb-4'>Login</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Enter email" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Password" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-between mb-3" controlId="formBasicCheckbox">
                                <small>
                                    <Form.Check type="checkbox" label="Remember Me"/>
                                </small>
                                <small>
                                    <Link to="" className='text-warning'>Forget Password</Link>
                                </small>
                            </Form.Group>
                            <Button variant="warning" type="submit" className='w-100 rounded-0'>
                                Submit
                            </Button>
                            <p className='mt-4'>
                                <small>
                                    Don't have an account? <Link to="/page/register" className='text-warning'>Create an account</Link>
                                </small>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;