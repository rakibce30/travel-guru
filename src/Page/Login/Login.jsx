import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [Error, setError] = useState('');
    const [Success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        setSuccess('');

        userLogin(email, password)
            .then(result => {
                setSuccess("Login successful")
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(err => setError(err.message));
    }

    return (
        <div>
            <Container className='mt-5 px-5'>
                <Row className='d-flex justify-content-center'>
                    <Col md={4} className='border rounded px-4 py-3'>
                        <h3 className='mb-4'>Login</h3>
                        <Form onSubmit={handleLogin}>
                            <Form.Text className="text-danger">
                                {Error}
                            </Form.Text>
                            <Form.Text className="text-success">
                                {Success}
                            </Form.Text>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' placeholder="Enter email" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' placeholder="Password" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-between mb-3" controlId="formBasicCheckbox">
                                <small>
                                    <Form.Check type="checkbox" label="Remember Me" />
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