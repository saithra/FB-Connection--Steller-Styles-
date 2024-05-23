import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import "./login.css"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg,setmsg]=useState("")

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5009/signup', { email, password });
      console.log(response.data);
       
      alert('Signup successful');
      setmsg(response.data.msg)
      window.location = '/login';
    } catch (error) {
      console.error('Error:', error);
      
    }
  };



  return (
    <div >
      <div class="login-container" id='page'>
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" class="shop_but w-100 p-1 mt-2" >Submit</button>
        <p id="p">Already have an account? <Link to='/login' className='login'>Login</Link> </p>
        <p>{msg}</p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
