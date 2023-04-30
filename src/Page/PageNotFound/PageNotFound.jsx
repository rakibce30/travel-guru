import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
            <div style={{height: "100vh"}} className='d-flex justify-content-center flex-column align-items-center text-center'>
                <Link to="/">
                    <Button className='btn-warning'>Home</Button>
                </Link>
                <h1>404 Page Not Found</h1>
            </div>
    );
};

export default PageNotFound;