import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const LoginLayout = () => {
    return (
        <div>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;