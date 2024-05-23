import React from 'react'
import { Link } from 'react-router-dom'


function Admindata() {
  return (
    <div className='page'>
      <button className='shop_but'><Link to="/customerdetails" className='link'>Customer Details</Link></button>
      
      
      <button className='shop_but'><Link to="/orderdetails" className='link'>Order Details</Link></button>
      
      <button className='shop_but'><Link to="/contactdetails" className='link'>Contact Details</Link></button>

      <button className='shop_but'><Link to="/addproduct" className='link'>Add Products</Link></button>


      <button className='shop_but'><Link to="/admincustomerlogin" className='link'>Back</Link></button>


    </div>
  )
}

export default Admindata
