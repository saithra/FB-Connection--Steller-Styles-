// import React, { useState } from 'react';
// import axios from 'axios';
// import "./navbar.css";
// import { Link } from 'react-router-dom'


// const Navbar = ({ size, cartItems, updateCartItem, removeCartItem }) => {
//     const [showModal, setShowModal] = useState(false);
//     const [showAddressForm, setShowAddressForm] = useState(false);
//     const [customerInfo, setCustomerInfo] = useState({
//         name: '',
//         address: '',
//         pincode: '',
//         state: '',
//         contact: ''
//     });

//     const openModal = () => {
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     const handleIncreaseQuantity = (index) => {
//         const updatedQuantity = cartItems[index].quantity + 1;
//         updateCartItem(index, updatedQuantity);
//     };

//     const handleDecreaseQuantity = (index) => {
//         const updatedQuantity = cartItems[index].quantity - 1;
//         if (updatedQuantity > 0) {
//             updateCartItem(index, updatedQuantity);
//         }
//     };

//     const handleRemoveItem = (index) => {
//         removeCartItem(index);
//     };

//     const calculateProductTotal = (item) => {
//         return item.price * item.quantity;
//     };

//     const calculateTotalAmount = () => {
//         return cartItems.reduce((total, item) => total + calculateProductTotal(item), 0);
//     };

  

//   const handleBuyNow = () => {
    
//     const isCustomerInfoValid = Object.values(customerInfo).every(value => value.trim() !== '');

//     if (!isCustomerInfoValid) {
//         alert('Please fill in all fields in the customer information form.');
//         return; 
//     }

//     const purchaseData = {
//         items: cartItems,
//         totalAmount: calculateTotalAmount(),
//         customerInfo: customerInfo
//     };

//     axios.post('http://localhost:5009/purchase', purchaseData)
//         .then(response => {
//             const alertMessage = document.createElement('div');
//             alertMessage.className = 'custom-alert';
//             alertMessage.innerHTML = `<div class="alert-box"><div class="alert-content"><span class="tick-symbol">&#10003;</span> Order Placed</div></div>`;
//             document.body.appendChild(alertMessage);
//             setTimeout(() => {
//                 alertMessage.remove();
//                 window.location.href = '/shoppingcart';
//             }, 3000); 
//         })
//         .catch(error => {
//             console.error('Error purchasing:', error);
//         });
// };

  
//     const handleFillAddress = () => {
//         setShowAddressForm(true);
//     };

//     const handlePreviousPage = () => {
//         setShowAddressForm(false);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCustomerInfo(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     return (
//         <>
//         <div class="container-fluid" id="navbar_top">
//       <div className="scrolling-text">
//       <p className="container d-flex justify-content-center mx-auto scrolling-text-content fst-italic" style={{fontSize:"17px"}}>Steller's Violet Summer Sale is Live! Don't miss out on great deals!</p>

//          </div>
//         </div><br/>
//         <nav className="navbar navbar-expand-lg shadow-lg navbar-light">
            
//             <div className="container-fluid" id="navbar">
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                    <Link to="/homepage"><i class="fa-solid fa-house" style={{marginTop:"30px",color:"deeppink"}}></i></Link>

//                         <li className="nav-item">
                            
//                             <button className="nav-link" onClick={openModal} style={{marginLeft:"1150px",marginTop:"20px",color:"white"}}>
//                                 <i className="fas fa-cart-plus" style={{color:'deeppink',fontSize:"25px"}}></i><sup style={{color:"deeppink",fontWeight:"900"}}>({size})</sup>
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             {showModal && (
//                 <div className="modal" style={{ display: "block",backgroundColor:" rgb(250, 206, 250)" }}   >
//                     <div className="modal-dialog modal-lg">
//                         <div className="modal-content">
//                             <div className="modal-header"  id="modal_bg">
//                                 <h5 className="modal-title" style={{color:"rgb(180, 9, 180)",marginLeft:"50px",fontFamily:"sans-serif",fontWeight:"700"}}>Happy Shopping!!</h5>
//                                 <button type="button" className="btn-close" onClick={closeModal}></button>
//                             </div>
//                             <div className="modal-body" >
//                                 {showAddressForm ? (
//                                     <form id="modal_form">
//                                         <div className="mb-3">
//                                             <label className="form-label">Name</label><br/>
//                                             <input type="text" className="form-control" name="name" value={customerInfo.name} onChange={handleChange} />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label className="form-label">Address</label><br/>
//                                             <input type="text" className="form-control" name="address" value={customerInfo.address} onChange={handleChange} />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label className="form-label">Pincode</label><br/>
//                                             <input type="text" className="form-control" name="pincode" value={customerInfo.pincode} onChange={handleChange} />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label className="form-label">State</label><br/>
//                                             <input type="text" className="form-control" name="state" value={customerInfo.state} onChange={handleChange} />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label className="form-label">Contact</label><br/>
//                                             <input type="text" className="form-control" name="contact" value={customerInfo.contact} onChange={handleChange} />
//                                         </div>
//                                     </form>
//                                 ) : (
//                                     <>
//                                         {cartItems.map((item, index) => (
//                                             <div key={index}>
//                                                 <div>
//                                                     <img src={`http://localhost:5009/images/${item.imagePath}`} alt={item.title} style={{marginTop:"30px"}} />
//                                                     <p id="title_modal">{item.title} - ₹{calculateProductTotal(item)}</p>
//                                                     <div id="increase_but">
//                                                         <button onClick={() => handleDecreaseQuantity(index)} class="remove_but">-</button>&nbsp;
//                                                         <span>{item.quantity}</span>&nbsp;
//                                                         <button onClick={() => handleIncreaseQuantity(index)} class="remove_but">+</button>&nbsp;
//                                                         <button onClick={() => handleRemoveItem(index)} class="remove_but">Remove</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                         {cartItems.length === 0 && (
//                                             <p id="items_cart">No items in cart</p>
//                                         )}
//                                         <p id="total_amt">Total Amount: ₹{calculateTotalAmount()}</p>
//                                     </>
//                                 )}
//                             </div>
//                             <div className="modal-footer"  id="modal_bg">
//                                 {showAddressForm ? (
//                                     <>
//                                         <button className="btn btn-primary" class="shop_but p-1 w-25 mt-2"  onClick={handlePreviousPage}>Previous</button>
//                                         <button className="btn btn-success" class="shop_but p-1 w-25 mt-2"  onClick={handleBuyNow}>Buy Now</button>
//                                     </>
//                                 ) : (
//                                     <button className="btn btn-success" class="shop_but p-1 w-25 mt-2"  onClick={handleFillAddress}>Fill Address</button>
//                                 )}
//                                 <button type="button" className="btn btn-secondary" class="shop_but p-1 w-25 mt-2"  onClick={closeModal}>Close</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </nav>
//         </>
//     );
// }

// export default Navbar;


import React, { useState } from 'react';
import axios from 'axios';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = ({ size, cartItems, updateCartItem, removeCartItem }) => {
    const [showModal, setShowModal] = useState(false);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        address: '',
        pincode: '',
        state: '',
        contact: ''
    });

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleIncreaseQuantity = (index) => {
        const updatedQuantity = cartItems[index].quantity + 1;
        updateCartItem(index, updatedQuantity);
    };

    const handleDecreaseQuantity = (index) => {
        const updatedQuantity = cartItems[index].quantity - 1;
        if (updatedQuantity > 0) {
            updateCartItem(index, updatedQuantity);
        }
    };

    const handleRemoveItem = (index) => {
        removeCartItem(index);
    };

    const calculateProductTotal = (item) => {
        return item.price * item.quantity;
    };

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + calculateProductTotal(item), 0);
    };

    const handleBuyNow = () => {
        const isCustomerInfoValid = Object.values(customerInfo).every(value => value.trim() !== '');

        if (!isCustomerInfoValid) {
            alert('Please fill in all fields in the customer information form.');
            return;
        }

        const purchaseData = {
            items: cartItems,
            totalAmount: calculateTotalAmount(),
            customerInfo: customerInfo
        };

        axios.post('http://localhost:5009/purchase', purchaseData)
            .then(response => {
                const alertMessage = document.createElement('div');
                alertMessage.className = 'custom-alert';
                alertMessage.innerHTML = `<div class="alert-box"><div class="alert-content"><span class="tick-symbol">&#10003;</span> Order Placed</div></div>`;
                document.body.appendChild(alertMessage);
                setTimeout(() => {
                    alertMessage.remove();
                    window.location.href = '/shoppingcart';
                }, 3000);
            })
            .catch(error => {
                console.error('Error purchasing:', error);
            });
    };

    const handleFillAddress = () => {
        setShowAddressForm(true);
    };

    const handlePreviousPage = () => {
        setShowAddressForm(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div className="container-fluid" id="navbar_top">
                <div className="scrolling-text">
                    <p className="container d-flex justify-content-center mx-auto scrolling-text-content fst-italic">Steller's Violet Summer Sale is Live! Don't miss out on great deals!</p>
                </div>
            </div>
            <br />
            <nav className="navbar navbar-expand-lg shadow-lg navbar-light">
                <div className="container-fluid" id="navbar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white p-1" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/homepage" className="nav-link">
                                <i className="fa-solid fa-house " style={{ marginTop: "8px", color: "deeppink" }}></i>
                            </Link>
                            <li className="nav-item position-absolute top-3 start-100">
                                <button className="nav-link" onClick={openModal} style={{ marginLeft: "-55px", marginTop: "7px", color: "white" }}>
                                    <i className="fas fa-cart-plus" style={{ color: 'deeppink', fontSize: "25px" }}></i>
                                    <sup style={{ color: "deeppink", fontWeight: "900" }}>({size})</sup>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav><br/>
            {showModal && (
                <div className="modal" style={{ display: "block", backgroundColor: "rgb(250, 206, 250)" }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header" id="modal_bg">
                                <h5 className="modal-title" style={{ color: "rgb(180, 9, 180)", marginLeft: "50px", fontFamily: "sans-serif", fontWeight: "700" }}>Happy Shopping!!</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                {showAddressForm ? (
                                    <form id="modal_form">
                                        <div className="mb-3">
                                            <label className="form-label">Name</label><br />
                                            <input type="text" className="form-control" name="name" value={customerInfo.name} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Address</label><br />
                                            <input type="text" className="form-control" name="address" value={customerInfo.address} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Pincode</label><br />
                                            <input type="text" className="form-control" name="pincode" value={customerInfo.pincode} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">State</label><br />
                                            <input type="text" className="form-control" name="state" value={customerInfo.state} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Contact</label><br />
                                            <input type="text" className="form-control" name="contact" value={customerInfo.contact} onChange={handleChange} />
                                        </div>
                                    </form>
                                ) : (
                                    <>
                                        {cartItems.map((item, index) => (
                                            <div key={index}>
                                                <div>
                                                    <img src={`http://localhost:5009/images/${item.imagePath}`} alt={item.title} style={{ marginTop: "20px" }} />
                                                    <p  class="container-fluid" id="title_modal">{item.title} - ₹{calculateProductTotal(item)}</p>
                                                    <div class="container-fluid d-flex justify-content-end" id="increase_but">
                                                        <button onClick={() => handleDecreaseQuantity(index)} className="remove_but">-</button>&nbsp;
                                                        <span>{item.quantity}</span>&nbsp;
                                                        <button onClick={() => handleIncreaseQuantity(index)} className="remove_but">+</button>&nbsp;
                                                        <button onClick={() => handleRemoveItem(index)} className="remove_but">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {cartItems.length === 0 && (
                                            <p id="items_cart">No items in cart</p>
                                        )}
                                        <p   class="container-fluid d-flex justify-content-end" id="total_amt">Total Amount: ₹{calculateTotalAmount()}</p>
                                    </>
                                )}
                            </div>
                            <div className="modal-footer" id="modal_bg">
                                {showAddressForm ? (
                                    <>
                                        <button className="btn btn-primary shop_but p-1 w-25 mt-2" onClick={handlePreviousPage}>Previous</button>
                                        <button className="btn btn-success shop_but p-1 w-25 mt-2" onClick={handleBuyNow}>Buy Now</button>
                                    </>
                                ) : (
                                    <button className="btn btn-success shop_but p-1 w-25 mt-2" onClick={handleFillAddress}>Fill Address</button>
                                )}
                                <button type="button" className="btn btn-secondary shop_but p-1 w-25 mt-2" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
