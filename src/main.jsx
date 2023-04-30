import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Providers/AuthProvider';
import { RouterProvider } from "react-router-dom";
import router from './Routes/router';
import 'swiper/css/bundle';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router = {router} />
    </React.StrictMode>
  </AuthProvider>
)
