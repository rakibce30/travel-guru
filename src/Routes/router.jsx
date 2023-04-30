import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Page/Home/Home";
import Booking from "../Page/Booking/Booking";
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
            }
        ]
    }
]);

export default router;