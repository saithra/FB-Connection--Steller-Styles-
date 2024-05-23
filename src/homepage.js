import React, { useState } from 'react'
import Slide from './slide'
import { Link } from 'react-router-dom'
import "./homepage.css"
import Footer from './footer'
import "./footer.css"
import Metadata from './metadata'
import List from './list';
import "./navbar.css"
import logo from "./img/logo1.png"
import logoimage from "./img/violet4.png";



function Homepage() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    // Convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <Metadata title={'Buy best Products'}/>
      <div class="container-fluid" id="navbar_top">
      <div className="container-fluid scrolling-text">
          <p className="container d-flex justify-content-center mx-auto scrolling-text-content fst-italic" style={{fontSize:"17px"}}>Steller's Violet Summer Sale is Live! Don't miss out on great deals!</p>
        </div>
        </div><br/>
      <nav class="navbar navbar-expand-lg navbar-light  ">
  <div class="container-fluid" id="navbar">
    <Link class="navbar-brand" to="/homepage"><img src={logo} height={45} width={180} style={{marginLeft:"20px"}}></img></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse bg-white" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/about"  className='link_nav'>About us</Link>
          
        </li>
        <li class="nav-item">
        <Link to="/customer"  className='link_nav'>Years of Customers</Link>
          
        </li>
        <li class="nav-item dropdown">
        <Link to="/shoppingcart" className='link_nav'> Shop Now</Link>
          
        </li>
      </ul>

     

    
<div className="search-container mx-auto w-25">
            <i className="fa-solid fa-magnifying-glass search-icon" style={{marginTop:"10px", position:"absolute",marginLeft:"10px",color:"rgb(180, 9, 180)",fontSize:"18px"}}></i>
            <input
                type="text"
                placeholder="Search"
                className="form-control search-input"
                value={inputText}
                onChange={inputHandler}
                style={{paddingLeft:"35px"}}
            />
            {/* Display the search results below the search bar only if inputText is not empty */}
            {inputText.length > 0 && <List input={inputText}/>}
        </div>


      <form class="d-flex" id="forms">
<div id="user">
<a href="#why_choose_us" target="_self">
<i class="fa-solid fa-user"></i> 

</a>&nbsp;
<a href="./shoppingcart" >
<i class="fa-solid fa-cart-shopping "></i>
</a>
</div>




      </form>
    </div>
  </div>

</nav>
<br/><br/><br/>
<div class="container-fluid shadow-lg " id="navbar_top1">
<div class="d-flex justify-content-around w-100 p-2" >
<Link to="/shoppingcart" className='link_nav_1'><li >Bridal Collection</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Saree's</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >churidhar</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Cholli</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Kids-Girls</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Tops</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Jeans</li></Link>
<Link to="/shoppingcart" className='link_nav_1'><li >Casual Collections</li></Link>
<li id="sale">SALE</li>

</div>
      
   
</div>
<div className="container-fluid">
        <img src={logoimage} height={350} width="100%"  alt="Logo" />
      </div>
     <Slide/>

     <Footer/>
    </div>
  )
}

export default Homepage
