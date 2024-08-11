// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import './index.css'
// import { RouterProvider} from "react-router-dom";
// import router from './routers/Router';
// import AuthProvider from './contects/AuthProvider';

// // import 'flowbite/dist/flowbite.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <AuthProvider>
//      <RouterProvider router={router} />
//   </AuthProvider>
 
// </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/Router';
import AuthProvider from './contects/AuthProvider';
import { CartProvider } from './components/CartContext';
// import { CartProvider } from './contexts/CartContext'; // Import CartProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider> {/* Wrap your application with CartProvider */}
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);

