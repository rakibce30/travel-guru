import React from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FaRegCalendar } from 'react-icons/fa';

const Booking = () => {
    return (
        <div>
            <Container className='mt-5 pt-5'>
                <Row direction="horizontal" gap={5}>
                    <Col md={5} className='d-flex align-items-center'>
                        <div className='my-auto'>
                            <h1 className='text-white montserrat-600 fs-1'>Cox's bazar</h1>
                            <p className='text-white'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col md={5}>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Origin</Form.Label>
                                        <Form.Control type="email" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Destination</Form.Label>
                                        <Form.Control type="email" placeholder="" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label>From</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    aria-label="From"
                                                    aria-describedby="inputGroup-sizing-default"
                                                />
                                                <InputGroup.Text id="inputGroup-sizing-default">
                                                    <FaRegCalendar></FaRegCalendar>
                                                </InputGroup.Text>
                                            </InputGroup>

                                        </Col>
                                        <Col>
                                            <Form.Label>To</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    aria-label="To"
                                                    aria-describedby="inputGroup-sizing-default"
                                                />
                                                <InputGroup.Text id="inputGroup-sizing-default">
                                                    <FaRegCalendar></FaRegCalendar>
                                                </InputGroup.Text>
                                            </InputGroup></Col>
                                    </Row>
                                    <Button className='btn-warning w-100'>Start Booking</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Booking;