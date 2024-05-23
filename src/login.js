import React, { useState } from 'react';
import axios from 'axios';
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5009/login', { email, password });
      console.log(response.data);
      window.location = '/homepage';
    } catch (error) {
      console.error('Error:', error);
    }
  };
 
  return (
    <div>
      <div class="login-container" id='page'>
      <h2>Login!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder='Enter your email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" placeholder='Enter your password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <button type="submit" className="btn btn-primary"  class="shop_but w-100 mt-2">Submit</button>
        

      </form>
    </div>
    </div>
  );
};

export default Login;

