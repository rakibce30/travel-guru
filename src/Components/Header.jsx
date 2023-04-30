import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className='flex-grow-1' href="/"><img src={Logo} style={{ width: "110px" }} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex me-lg-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0 text-right align-items-md-center"
                        style={{ maxHeight: '100vh' }}
                        navbarScroll
                    >
                        <Link to="" className='text-white text-decoration-none me-md-3'>News</Link>
                        <Link to="/booking" className='text-white text-decoration-none me-md-3'>Booking</Link>
                        <Link to="" className='text-white text-decoration-none me-md-3'>Blog</Link>
                        <Nav.Link className='text-white' href="#action2">Contact</Nav.Link>
                        <Link to="/login"><Button className='btn-warning btn-sm ms-5'>Login</Button></Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;