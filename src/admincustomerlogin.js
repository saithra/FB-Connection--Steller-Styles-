import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"


function Admincustomerlogin() {
  return (
    <div className='page'>
      <button className='shop_but'><Link to="/adminlogin" className='link'>Admin Login</Link></button>
      
      
      <button className='shop_but'><Link to="/signup" className='link'>Customer Login</Link></button>
      

      <button className='shop_but' ><Link to="/" className='link'>Home</Link></button>


    </div>
  )
}

export default Admincustomerlogin
