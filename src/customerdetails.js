import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customerdetails.css';

function Customerdetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5009/read')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const handleDelete = async (emailToDelete) => {
    try {
      await axios.delete(`http://localhost:5009/users/${emailToDelete}`);
      setData(data.filter(user => user.email !== emailToDelete));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h1 id="admin_h1" className="text-center mb-4">Customer Login Details</h1>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Email</th>
                <th>Password</th>
                <th><i className="fa-solid fa-trash"></i></th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td><i className="fa-solid fa-trash text-danger" onClick={() => handleDelete(user.email)}></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button className="btn btn-primary my-3" id="logout">
        <Link to="/admindata" className="text-white text-decoration-none">Logout</Link>
      </button>
    </>
  );
}

export default Customerdetails;
