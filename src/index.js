import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Search from './search';
// import Cartapp from './addcart';
// import Navbar from './navbar';
// import Product from './addproduct';
// import Carthome from './carthome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Search/> */}
    {/* <Carthome/> */}
    {/* <Cartapp/> */}
    {/* <Product/> */}
    {/* <Navbar/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
