import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './login'; 
import Signup from './signup'; 
import "./login.css"
import { HelmetProvider } from 'react-helmet-async';
import Admincustomerlogin from './admincustomerlogin';
import Admin from './adminlogin';
import Admindata from './admindata';
import Customerdetails from './customerdetails';
import Orderdetails from './orderdetails';
import Homepage from './homepage';
import About from './about';
import Customer from './customer';
import Contact from './contact';
import Product from './addproduct';
import ImageGallery from './shoppingcart';

function App() {
  return (
    <Router>
      <div>
       
            <HelmetProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} /> 
          <Route path='/admincustomerlogin' element={<Admincustomerlogin/>}/>
          <Route path='/adminlogin' element={<Admin/>}/>
          <Route path='/admindata' element={<Admindata/>}/>
          <Route path='/customerdetails' element={<Customerdetails/>}/>
          <Route path='/orderdetails' element={<Orderdetails/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/contactdetails' element={<Contact/>}/>
          <Route path='/addproduct' element={<Product/>}/> 
          <Route path='/shoppingcart' element={<ImageGallery/>}/> 
          
        </Routes>
        </HelmetProvider>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>
    <Link to="/admincustomerlogin" className='home'>Steller Styles</Link>
    </h2>;
}

export default App;
