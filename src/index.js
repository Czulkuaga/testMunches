import React from 'react';
import {render} from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import SignIn from './auth/signin/Signin';
import Signup from './auth/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/products/Products';
import NotFound from './pages/NotFound/NotFound';

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

