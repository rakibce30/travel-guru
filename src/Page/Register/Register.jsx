import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';



const Register = () => {
    const { userRegistration } = useContext(AuthContext);
    const [ Error, setError ] = useState('');
    const [Success, setSuccess] = useState('');
    const [Accepted, setAccepted] = useState(false);

    const handleRegistration = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError('')
        if (password !== confirm) {
            setError('Password not match');
            return
        }
        else if(password.length < 8){
            setError('Password must be at least 8 characters');
            return
        }
        userRegistration(email, password)
        .then(result => {
            console.log(result.user);
            setSuccess("Registration successful")
            form.reset();
        })
        .catch(err => setError(err.message));
    }

    const handleTerms = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div>
            <Container className='mt-5 px-5'>
                <Row className='d-flex justify-content-center'>
                    <Col md={4} className='border rounded px-4 py-3'>
                        <h3 className='mb-4'>Create an account</h3>
                        <Form onSubmit={handleRegistration}>
                            <Form.Text className="text-danger">
                                {Error}
                            </Form.Text>
                            <Form.Text className="text-success">
                                {Success}
                            </Form.Text>
                            <Form.Group className="mb-3" >
                                <Form.Control type="email" placeholder="First Name" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="email" placeholder="Last Name" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="email" name='email' placeholder="Username or Email" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Control type="password" name='password' placeholder="Password" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="password" name='confirm' placeholder="Confirm Password" className='border-top-0 border-start-0 border-end-0 border-bottom rounded-0' />
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-between mb-3" controlId="formBasicCheckbox">
                                <small>
                                    <Form.Check onClick={handleTerms} type="checkbox" label={<>Accepted <Link className='text-warning'>Term & Condition</Link></>}  />
                                </small>
                            </Form.Group>

                            <Button variant="warning" type="submit" disabled={!Accepted} className='w-100 rounded-0'>
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