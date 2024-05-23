import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./customerdetails.css";

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5009/contact")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  const handleDelete = async (nameToDelete) => {
    try {
      // Send delete request to backend to delete contact
      await axios.delete(`http://localhost:5009/contacts/${nameToDelete}`);
      // Remove deleted contact from state
      setData(data.filter(contact => contact.name !== nameToDelete));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h1 id="admin_h1" className="text-center mb-4">Customer Contact Details</h1>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Feedback</th>
                <th><i className="fa-solid fa-trash"></i></th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>{contact.address}</td>
                  <td>{contact.msg}</td>
                  <td>
                    <i className="fa-solid fa-trash text-danger" onClick={() => handleDelete(contact.name)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary my-3 " id='logout'>
          <Link to="/admindata"  className="text-white text-decoration-none">Logout</Link>
        </button>
      </div>
    </>
  );
}

export default Contact;
