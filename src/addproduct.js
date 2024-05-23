import React, { useState } from 'react';
import './customerdetails.css';
import axios from 'axios';
import Addproductimage from './addproductshop';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send both image and form data
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('price', price);

    try {
      const response = await axios.post('http://localhost:5009/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload response:', response);
      alert('Product added successfully');
    } catch (err) {
      console.error('Upload error:', err);
      alert('Error adding product');
    }
  };

  return (
    <>
      <div className="container-fluid" id="addproduct-bg">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <h1 id="admin_h1" className="text-center">Add Item To Cart</h1>
            <button className="btn btn-primary my-3" id="logout">
        <Link to="/admindata" className="text-white text-decoration-none">Logout</Link>
      </button>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card p-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="imageUpload"  id="admin_h1" style={{fontSize:'15px',fontWeight:"700"}}>Image Upload</label><br/><br/>
                  <input type="file" className="form-control" id="imageUpload" onChange={handleFileChange} />
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button className="btn btn-primary w-100 mt-4" type="submit" class='shop_but' style={{width:"250px"}}>Add Item to Cart</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <Addproductimage />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
