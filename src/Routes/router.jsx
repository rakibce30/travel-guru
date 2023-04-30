import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Page/Home/Home";
import Booking from "../Page/Booking/Booking";
import Login from "../Page/Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import Register from "../Page/Register/Register";
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
        ]
    },
    {
        path: '/user',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;