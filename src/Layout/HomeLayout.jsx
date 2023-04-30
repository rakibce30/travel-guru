import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import bg from '../../src/assets/images/Rectangle1.png';
import './HomeLayout.css';

const HomeLayout = () => {
    const bgStyle = {
        width: "100%",
        minHeight: "100vh",
        backgroundOrigin: "content-box",
        backgroundSize: "cover",
        backgroundImage : `url(${bg})`
      };
    return (
        <div className='hero' style={bgStyle}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;