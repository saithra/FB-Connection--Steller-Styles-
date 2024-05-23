
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './navbar';
// import Footer from './footer';
// import "./shoppingcart.css"

// const ImageGallery = () => {
//     const [images, setImages] = useState([]);
//     const [cartCount, setCartCount] = useState(0);
//     const [cartItems, setCartItems] = useState([]);
//     const [addedToCart, setAddedToCart] = useState({});

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5009/images');
//                 setImages(response.data);
//             } catch (err) {
//                 console.error('Error fetching images:', err);
//             }
//         };
//         fetchImages();
//     }, []);

//     const addToCart = (image) => {
//         if (!addedToCart[image._id]) {
//             setCartCount(prevCount => prevCount + 1);
//             setCartItems([...cartItems, { ...image, quantity: 1 }]);
//             setAddedToCart(prevState => ({ ...prevState, [image._id]: true }));
//             alert('Item added to cart', 'alert');

//         } else {
//             alert('Item is already added to cart');
//         }
//     };

//     const updateCartItem = (index, quantity) => {
//         const updatedCartItems = [...cartItems];
//         if (quantity <= 0) {
//             updatedCartItems.splice(index, 1);
//         } else {
//             updatedCartItems[index] = { ...updatedCartItems[index], quantity };
//         }
//         setCartItems(updatedCartItems);
//         setCartCount(updatedCartItems.reduce((total, item) => total + item.quantity, 0));
//     };

//     const removeCartItem = (index) => {
//         const updatedCartItems = [...cartItems];
//         updatedCartItems.splice(index, 1);
//         setCartItems(updatedCartItems);
//         setCartCount(updatedCartItems.reduce((total, item) => total + item.quantity, 0));
//     };

//     return (
//         <>
//         <div class="shoppingcart container-fluid  bg-white">
//             <Navbar size={cartCount} cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />
//             <br /><br/><br/>
//             <center>
//                 <div className="image-grid">
//                     {images.map(image => (
//                         <div key={image._id} className="card" style={{backgroundColor:"gainsboro"}}>
//                             <div className="card-img-container" >
//                                 <img src={`http://localhost:5009/images/${image.imagePath}`}
//                                     alt={image.imageName}
//                                     className="card-img"
//                                 />
//                             </div>
//                             <div className="card-body" style={{marginTop:'-10px'}}>
//                                 <p id="title">Title: {image.title}</p>
//                                 <p id="price">Price: ₹{image.price}</p>
//                                 <button 
//                                     className="btn btn-primary" class="shop_but p-1 w-50 mt-2" 
//                                     onClick={() => addToCart(image)}
//                                 >
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </center>
//             <style>{`
// .image-grid {
//   display: grid;
//   grid-template-columns: repeat(3,400px);
//   margin-left:80px;
//   flex-wrap: wrap;
//   justify-content: space-between;
// }

// .row {
//   display: flex;
//   width: 100%;
// }

// .column {
//   flex: 1;
//   margin: 10px;
// }

// .card {
//   width: 300px;
//   height: 250px; /* Adjusted height to accommodate the image and name */
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   overflow: hidden;
//   margin-top:20px;
  
// }

// .card-img-container {
//   text-align: center;
//   height: 200px; /* Height for the image */
// }

// .card-img {
//   max-width: 100%;
//   max-height: 100%;
// }

// .card-body {
//   padding: 10px;
//   text-align: center;
// }

// .card-title {
//   margin-top: 5px; /* Add some space between the image and the name */
// }

// `}</style>
// <br/><br/><br/>
// <Footer/>
//         </div>
//         </>
//     );
// };

// export default ImageGallery;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';
import "./shoppingcart.css";

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [addedToCart, setAddedToCart] = useState({});

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:5009/images');
                setImages(response.data);
            } catch (err) {
                console.error('Error fetching images:', err);
            }
        };
        fetchImages();
    }, []);

    const addToCart = (image) => {
        if (!addedToCart[image._id]) {
            setCartCount(prevCount => prevCount + 1);
            setCartItems([...cartItems, { ...image, quantity: 1 }]);
            setAddedToCart(prevState => ({ ...prevState, [image._id]: true }));
            alert('Item added to cart', 'alert');
        } else {
            alert('Item is already added to cart');
        }
    };

    const updateCartItem = (index, quantity) => {
        const updatedCartItems = [...cartItems];
        if (quantity <= 0) {
            updatedCartItems.splice(index, 1);
        } else {
            updatedCartItems[index] = { ...updatedCartItems[index], quantity };
        }
        setCartItems(updatedCartItems);
        setCartCount(updatedCartItems.reduce((total, item) => total + item.quantity, 0));
    };

    const removeCartItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        setCartCount(updatedCartItems.reduce((total, item) => total + item.quantity, 0));
    };

    return (
        <div className="shoppingcart container-fluid bg-white">
            <Navbar size={cartCount} cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />
            <br /><br /><br />
            <center>
                <div className="image-grid">
                    {images.map(image => (
                        <div key={image._id} className="card">
                            <div className="card-img-container">
                                <img
                                    src={`http://localhost:5009/images/${image.imagePath}`}
                                    alt={image.imageName}
                                    className="card-img"
                                />
                            </div>
                            <div className="card-body">
                                <p id="title">Title: {image.title}</p>
                                <p id="price">Price: ₹{image.price}</p>
                                <button 
                                    className="shop_but" 
                                    onClick={() => addToCart(image)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </center><br/><br/>
            <Footer />
        </div>
    );
};

export default ImageGallery;

