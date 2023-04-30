import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Package from '../../Components/Package';

const Packages = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Package></Package>
                        <Package></Package>
                        <Package></Package>
                        <Package></Package>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Packages;