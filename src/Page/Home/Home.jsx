import React from 'react';
import Slider from '../../Components/Slider';
import { Button, Col, Container, Row } from 'react-bootstrap';


const Home = () => {
    return (
        <div>
            <Container className='mt-5 pt-5'>
                <Row className='flex-column-reverse flex-md-row'>
                    <Col md={6} className='d-flex align-items-center'>
                        <div className='my-auto'>
                            <h1 className='text-white montserrat-600 fs-1'>Cox's bazar</h1>
                            <p className='text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                            <Button className='btn-sm btn-warning'>Booking</Button>
                        </div>
                    </Col>
                    <Col md={6} className='p-3'>
                        <Slider></Slider>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Home;