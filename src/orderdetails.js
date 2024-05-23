import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./orderdetails.css";

function OrderDetails() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5009/purchases")
      .then(res => {
        console.log(res.data);
        setPurchases(res.data);
      })
      .catch(error => {
        console.error('Error fetching purchases:', error);
      });
  }, []);

  return (
    <>
      <div className='container'>
        <div className='content'>
          <h1 id="admin_h1" className="text-center my-4">Customer Contact Details</h1>
          <div className="table-responsive">
            <table className='table table-bordered'>
              <thead className="thead-light">
                <tr>
                  <th>Image ID</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Pincode</th>
                  <th>State</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase, index) => (
                  <tr key={index}>
                    <td>{purchase.items.map(image => image && image._id).join(', ')}</td>
                    <td>
                      {purchase.items.map(image => (
                        <img src={`http://localhost:5009/images/${image && image.imagePath}`} className="product-image img-fluid" alt={image && image.title} />
                      ))}
                    </td>
                    <td>{purchase.items.map(image => image && image.title).join(', ')}</td>
                    <td>{purchase.items.map(image => image && image.price).join(', ')}</td>
                    <td>{purchase.items.map(image => image && image.quantity).join(', ')}</td>
                    <td>{purchase.items.reduce((total, image) => (image ? total + image.price * image.quantity : total), 0)}</td>
                    <td>{purchase.customerInfo.name}</td>
                    <td>{purchase.customerInfo.address}</td>
                    <td>{purchase.customerInfo.pincode}</td>
                    <td>{purchase.customerInfo.state}</td>
                    <td>{purchase.customerInfo.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button className='btn btn-primary my-3' id='logout'><Link to="/admindata" className='link text-white'>Logout</Link></button>
    </>
  );
}

export default OrderDetails;
