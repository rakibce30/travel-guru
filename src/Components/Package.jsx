import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../assets/images/Rectangle 26.png'

const Package = () => {
    return (
        <div className='mb-5'>
            <Row>
                <Col md={6} className='d-flex align-items-center'>
                    <Col md={5}>
                        <img src={img} alt="" className='img-fluid' />
                    </Col>
                    <Col md={7} className='ms-4'>
                        <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                        <p className='text-secondary mb-0'>
                            <small>
                                <span className='me-3'>4 guests</span>
                                <span className='me-3'>2 bedrooms</span>
                                <span>2 bath</span>
                            </small>
                        </p>
                        <p className='text-secondary mb-0'>
                            <small>
                                <span className='me-3'>Wifi,</span>
                                <span className='me-3'>Air Condition,</span>
                                <span>Kitchen</span>
                            </small>
                        </p>
                        <p className='text-secondary mb-1'>
                            <small>
                                <span className='me-3'>Cancellation fexibility availiable</span>
                            </small>
                        </p>
                        <p className='text-black mb-0'>
                            <small>
                                <span className='me-3'>4.9 (20)</span>
                                <span className='me-3'>$34/Night</span>
                                <span className='me-3'>$34/total</span>
                            </small>
                        </p>
                    </Col>
                </Col>
                <Col md={6}></Col>

            </Row>
        </div>
    );
};

export default Package;