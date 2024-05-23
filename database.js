// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require("cors")
// const path = require("path")
// const { v4: uuidv4 } = require('uuid');
// const multer = require('multer');


// const app = express();
// const PORT = 5009;

// mongoose.connect('mongodb://localhost:27017/myapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

//   .then(() => {
//     console.log("db is  conected");
//   })

//   .catch(() => {
//     console.log("db is not conected");
//   })

// // user

// const userSchema = new mongoose.Schema({

//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });

// const User = mongoose.model('User', userSchema);
// // contact
// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   number: {
//     type: Number,
//     required: true
//   },
//   address: {
//     type: String,
//     required: true
//   },

//   msg: {
//     type: String,
//     required: true
//   }
// })


// const contact = mongoose.model('contact', contactSchema)


// // add products

// const addproductSchema = new mongoose.Schema({
//   imageName: {
//     type: String,
//     required: true
//   },
//   imagePath: {
//     type: String,
//     required: true
//   },
//   title: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
// })


// const addproduct = mongoose.model('Addproduct', addproductSchema)


// app.use(cors())
// app.use(express.json());
// app.use("/uploads", express.static("uploads"))


// app.get("/read", async (req, res) => {

//   const read_data = await User.find()

//   res.json(read_data)

// })

// app.get("/contact", async (req, res) => {

//   const contact_data = await contact.find()

//   res.json(contact_data)

// })

// // add product
// app.get("/addproduct", async (req, res) => {

//   const Addproduct_data = await addproduct.find()

//   res.json(Addproduct_data)

// })

// app.post('/signup', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {

//       return res.status(400).json({ message: 'User already exists' });
//     }
//     // Create new user
//     const newUser = new User({ email, password });
//     await newUser.save();
//     return res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Endpoint for user login
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Find user by email and password
//     const user = await User.findOne({ email, password });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }
//     return res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Error:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });


// app.post("/contact", async (req, res) => {
//   const { msg, name, email, num, address } = req.body
//   const data = {
//     name: name,
//     email: email,
//     number: num,
//     address: address,
//     msg: msg

//   }

//   await contact.insertMany([data])

// })

// // add product
// // app.post("/addproduct",async(req,res)=>{
// //   const {title,price}=req.body
// //   const data={

// //     title:title,
// //     price:price

// //   }

// //   await addproduct.insertMany([data])

// //   })

// // img upload

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './image');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// app.post('/addproduct', upload.single('image'), async (req, res) => {
//   try {
//     // Check if image file is uploaded
//     if (!req.file) {
//       return res.status(400).send('No image uploaded');
//     }

//     // Extract image details
//     const { filename, path } = req.file;

//     // Extract product details from form data
//     const { title, price } = req.body;

//     // Create new product document
//     const newProduct = new addproduct({
//       imageName: filename,
//       imagePath: path,
//       title: title,
//       price: price
//     });

//     // Save product to the database
//     await newProduct.save();

//     // Send success response
//     res.status(201).send('Product added successfully');
//   } catch (err) {
//     // Handle errors
//     console.error('Error adding product:', err);
//     res.status(500).send('Server Error');
//   }


//   try {
//     const newImage = new addproduct({
//       imageName: req.file.filename,
//       imagePath: req.file.filename ,
      

//       // Saving filename as path, adjust if needed
//     });
//     await newImage.save();
//     res.status(201).send('Image uploaded successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Serve uploaded images statically
// app.use('/images', express.static(path.join(__dirname, 'image')));

// app.get('/images', async (req, res) => {
//   try {
//     const images = await addproduct.find();
//     res.json(images);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });


// // email delete
// app.delete('/users/:email', async (req, res) => {
//   const { email } = req.params;
//   try {
//     // Find user by email and delete
//     const deletedUser = await User.findOneAndDelete({ email });
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     return res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.delete('/contacts/:name', async (req, res) => {
//   const { name } = req.params;
//   try {
//     // Find contact by name and delete
//     const deletedContact = await contact.findOneAndDelete({ name });
//     if (!deletedContact) {
//       return res.status(404).json({ message: 'Contact not found' });
//     }
//     return res.status(200).json({ message: 'Contact deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting contact:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });






// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");
const multer = require('multer');

const app = express();
const PORT = 5009;

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("db is connected");
})
.catch((err) => {
  console.log("db connection error:", err);
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);


const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
  
    msg: {
      type: String,
      required: true
    }
  })
  
  
  const contact = mongoose.model('contact', contactSchema)
  

const addproductSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});

const Addproduct = mongoose.model('Addproduct', addproductSchema);


const purchaseSchema = new mongoose.Schema({
  items: Array,
  totalAmount: Number,
  customerInfo: {
    name: String,
    address: String,
    pincode: String,
    state: String,
    contact: String
  }
});

// Define a model for purchases
const Purchase = mongoose.model('Purchase', purchaseSchema);



app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/read", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.get("/contact", async (req, res) => {

    const contact_data = await contact.find()
  
    res.json(contact_data)
  
  })

app.get("/addproduct", async (req, res) => {
  try {
    const products = await Addproduct.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Assuming you have a route to fetch purchases data
app.get('/purchases', async (req, res) => {
  try {
    const purchases = await Purchase.find().populate('items.product', 'title price'); // Populate the product details
    res.status(200).json(purchases);
  } catch (error) {
    console.error('Error fetching purchases:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/purchase', async (req, res) => {
  try {
    const { items, totalAmount, customerInfo } = req.body;
    
    // Create a new purchase document
    const purchase = new Purchase({
      items,
      totalAmount,
      customerInfo
    });
    
    // Save the purchase data to the database
    await purchase.save();
    
    // Send a response indicating the purchase was successful
    res.status(200).json({ message: 'Purchase data and customer information stored successfully' });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error storing purchase data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User({ email, password });
    await newUser.save();
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post("/contact", async (req, res) => {
    const { msg, name, email, num, address } = req.body
    const data = {
      name: name,
      email: email,
      number: num,
      address: address,
      msg: msg
  
    }
  
    await contact.insertMany([data])
  
  })



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './image');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.post('/addproduct', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image uploaded' });
    }
    const { filename } = req.file;
    const { title, price } = req.body;
    const newProduct = new Addproduct({
      imageName: filename,
      imagePath: filename,
      title: title,
      price: price
    });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.use('/images', express.static(path.join(__dirname, 'image')));

app.get('/images', async (req, res) => {
  try {
    const images = await Addproduct.find();
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete('/users/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const deletedUser = await User.findOneAndDelete({ email });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete('/contacts/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const deletedContact = await Contact.findOneAndDelete({ name });
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    return res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// app.delete('/products/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedProduct = await Addproduct.findOneAndDelete({ _id: id });
//     if (!deletedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     return res.status(200).json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting product:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });

app.delete('/images/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the product by its ID
    const deletedProduct = await Addproduct.findOneAndDelete({ _id: id });

    // If no product found with the given ID, return 404 error
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Product successfully deleted
    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    // If any error occurs during the deletion process, handle it
    console.error('Error deleting product:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Assuming you have already defined your product model (Addproduct)

// Endpoint for updating a product
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { title, price } = req.body;
  try {
    const updatedProduct = await Addproduct.findByIdAndUpdate(id, { title, price }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});









