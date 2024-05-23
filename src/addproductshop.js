import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Addproductimage = () => {
    const [images, setImages] = useState([]);
    const [editedProduct, setEditedProduct] = useState({ title: '', price: '', id: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('http://localhost:5009/images');
            setImages(response.data);
        } catch (err) {
            console.error('Error fetching images:', err);
        }
    };

    const deleteImage = async (id) => {
        try {
            await axios.delete(`http://localhost:5009/images/${id}`);
            // After successful deletion, fetch the updated list of images
            fetchImages();
        } catch (err) {
            console.error('Error deleting image:', err);
        }
    };

    const editProduct = (image) => {
        setEditedProduct({ title: image.title, price: image.price, id: image._id });
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const saveChanges = async () => {
        try {
            await axios.put(`http://localhost:5009/products/${editedProduct.id}`, {
                title: editedProduct.title,
                price: editedProduct.price
            });
            // After successful update, fetch the updated list of images
            fetchImages();
            setIsEditing(false);
        } catch (err) {
            console.error('Error updating product:', err);
        }
    };

    const renderImages = () => {
        return images.map(image => (
            <div key={image._id} className="column">
                <div className="card">
                    <div className="card-img-container">
                        <img
                            src={`http://localhost:5009/images/${image.imagePath}`}
                            alt={image.imageName}
                            className="card-img"
                        />
                    </div>
                    <div className="card-body">
                        {isEditing && editedProduct.id === image._id ? (
                            <>
                                <input
                                    type="text"
                                    name="title"
                                    value={editedProduct.title}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="number"
                                    name="price"
                                    value={editedProduct.price}
                                    onChange={handleInputChange}
                                />
                                <button className="btn btn-primary" class='shop_but mt-1 p-1' onClick={saveChanges}>Save</button>
                            </>
                        ) : (
                            <>
                                <p>Title: {image.title}</p>
                                <p>Price: ₹{image.price}</p>
                                <button className="btn btn-primary" class='shop_but p-1 mt-1' onClick={() => editProduct(image)}>Edit</button>&nbsp;&nbsp;
                                <button className="btn btn-primary" class='shop_but p-1 mt-1' onClick={() => deleteImage(image._id)}>Delete</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div style={{marginTop:"45px"}}>
            <center>
                <div className="image-grid">
                    {renderImages()}
                </div>
            </center>
            <style>{`
                .image-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .column {
                    flex: 1;
                    margin: 10px;
                }

                .card {
                    width: 300px;
                    height: 250px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    overflow: hidden;
                }

                .card-img-container {
                    text-align: center;
                    height: 200px;
                }

                .card-img {
                    max-width: 100%;
                    max-height: 100%;
                }

                .card-body {
                    padding: 10px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Addproductimage;
